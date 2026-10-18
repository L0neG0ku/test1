/* Sends the survey thank-you as a WhatsApp message via Meta's WhatsApp Cloud API.

   Runs on Vercel as a serverless function so the access token never reaches the
   browser. It does nothing until these environment variables are set in
   Vercel > Settings > Environment Variables:

     WHATSAPP_TOKEN            permanent access token (System User) from Meta
     WHATSAPP_PHONE_NUMBER_ID  the sending number's ID, from WhatsApp Manager
     WHATSAPP_TEMPLATE_NAME    an APPROVED message template with one {{1}} variable
                               (the visitor's first name)
     WHATSAPP_TEMPLATE_LANG    optional, defaults to "en"

   A business can only open a conversation with a template message, which is
   why a template is required rather than free text. */

const ALLOWED_ORIGINS = [
  "https://kribblecare.com",
  "https://www.kribblecare.com",
];

/** Digits only, with an India country code added when a bare 10 digit number
    is given. Returns null if it can't be a real mobile number. */
function toWhatsAppNumber(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return digits;
  if (digits.length === 11 && digits.startsWith("0")) return `91${digits.slice(1)}`;
  if (digits.length >= 11 && digits.length <= 15) return digits;
  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // The endpoint can message any number, so only our own site may call it.
  // (Preview deploys and localhost are allowed outside production.)
  const origin = req.headers.origin || "";
  const isProd = process.env.VERCEL_ENV === "production";
  const originOk =
    ALLOWED_ORIGINS.includes(origin) ||
    (!isProd && (origin.includes("localhost") || origin.endsWith(".vercel.app")));
  if (!originOk) return res.status(403).json({ error: "Forbidden" });

  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const template = process.env.WHATSAPP_TEMPLATE_NAME;
  if (!token || !phoneId || !template) {
    // Not configured yet: not an error from the visitor's point of view.
    return res.status(200).json({ sent: false, reason: "not_configured" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const to = toWhatsAppNumber(body.phone);
  const firstName = String(body.firstName || "").trim().slice(0, 40) || "there";
  if (!to) return res.status(400).json({ error: "Invalid phone number" });

  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: template,
          language: { code: process.env.WHATSAPP_TEMPLATE_LANG || "en" },
          components: [
            { type: "body", parameters: [{ type: "text", text: firstName }] },
          ],
        },
      }),
    });

    if (!response.ok) {
      const detail = await response.json().catch(() => ({}));
      console.error("WhatsApp send failed", response.status, detail);
      return res.status(502).json({ sent: false, error: "WhatsApp rejected the message" });
    }
    return res.status(200).json({ sent: true });
  } catch (error) {
    console.error("WhatsApp send error", error);
    return res.status(502).json({ sent: false, error: "Could not reach WhatsApp" });
  }
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
