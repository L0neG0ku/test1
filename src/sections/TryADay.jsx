import { Calendar, Clock, Heart } from "../components/icons";

const USES = [
  { Icon: Clock, text: "A meeting that runs late, or a few hours to yourself" },
  { Icon: Calendar, text: "School holidays and days the nanny can't come" },
  { Icon: Heart, text: "A trial day before you commit to a full year" },
];

function TryADay() {
  return (
    <section className="k-section k-day" id="one-day">
      <div className="k-shell k-day__grid">
        <div data-reveal>
          <p className="k-eyebrow">One-day & hourly care</p>
          <h2 className="k-h2">
            Not sure yet? <span>Try a day.</span>
          </h2>
          <p className="k-lead">
            Book a verified centre for a single day or just a few hours, with no
            enrolment and no long commitment. Let your child try it before you
            decide.
          </p>
        </div>

        <div className="k-day__uses" data-reveal-stagger>
          {USES.map(({ Icon, text }) => (
            <p className="k-day__use" key={text}>
              <Icon size={22} />
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TryADay;
