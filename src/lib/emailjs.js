/* One place for the EmailJS account details. All three forms (survey, waitlist,
   contact) send through the team@kribblecare.com account. These values are
   public by design: EmailJS ships them in the browser bundle. */

export const EMAILJS = {
  service: "service_q8k24cd",
  publicKey: "2HJ6aU8xl8d2Jq-Uw",
  // Delivers a submission to team@kribblecare.com.
  teamTemplate: "template_xq863d5",
  // Thank-you sent to the person who completed the survey (To Email = {{email}}).
  thankYouTemplate: "template_fzf7toh",
};
