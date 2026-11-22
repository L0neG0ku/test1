import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "./icons";
import { AGE_BANDS, AREAS, CARE_TYPES } from "../data/search";
import { trackSearch } from "../lib/analytics";

/* Type, age and area, then off to /explore with the choices in the URL. */
function SearchForm({ initial = {}, title = "Find care near you" }) {
  const navigate = useNavigate();
  const [type, setType] = useState(initial.type || "daycare");
  const [age, setAge] = useState(initial.age || "");
  const [area, setArea] = useState(initial.area || "");

  const submit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({ type });
    if (age) params.set("age", age);
    if (area.trim()) params.set("area", area.trim());
    trackSearch(type, age);
    navigate(`/explore?${params}`);
  };

  return (
    <form className="k-search" onSubmit={submit} role="search">
      <p className="k-search__title">{title}</p>

      <div className="k-search__types" role="radiogroup" aria-label="Type of care">
        {CARE_TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={type === t.id}
            className={`k-search__type ${type === t.id ? "is-active" : ""}`}
            onClick={() => setType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="k-search__row">
        <div className="k-search__field">
          <label htmlFor="k-search-age">Child's age</label>
          <select id="k-search-age" value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">Any age</option>
            {AGE_BANDS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div className="k-search__field">
          <label htmlFor="k-search-area">Area in Gurugram</label>
          <input
            id="k-search-area"
            type="text"
            list="k-search-areas"
            placeholder="e.g. Sector 50, Golf Course Road"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            autoComplete="off"
          />
          <datalist id="k-search-areas">
            {AREAS.map((a) => (
              <option key={a} value={a} />
            ))}
          </datalist>
        </div>

        <button type="submit" className="k-btn k-btn--primary k-search__go">
          <Search size={18} /> Search <ArrowRight />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
