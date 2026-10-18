import { useState } from "react";
import { ChevronDown } from "../components/icons";
import { FAQ_ITEMS as ITEMS } from "../data/faq";

function Faq({ showEyebrow = true }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="k-section k-bg-soft" id="faq">
      <div className="k-shell">
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }} data-reveal>
          {showEyebrow && (
            <p className="k-eyebrow" style={{ justifyContent: "center" }}>
              Questions
            </p>
          )}
          <h2 className="k-h2">
            Asked often. <span className="k-em">Answered honestly.</span>
          </h2>
        </div>

        <div className="k-faq" data-reveal-stagger>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className={`k-faq__item ${isOpen ? "is-open" : ""}`}
                key={item.q}
              >
                <button
                  className="k-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown />
                </button>
                <div className="k-faq__a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
