/* Options for the centre search. Listings themselves arrive with the app; until
   then the Explore page shows an empty state and a waitlist prompt. */

export const CARE_TYPES = [
  { id: "daycare", label: "Daycare" },
  { id: "preschool", label: "Preschool" },
  { id: "activities", label: "Activities" },
  { id: "one-day", label: "One-day care" },
];

export const AGE_BANDS = [
  { id: "15m-2y", label: "15 months to 2 years" },
  { id: "2-3y", label: "2 to 3 years" },
  { id: "3-6y", label: "3 to 6 years" },
  { id: "6-10y", label: "6 to 10 years" },
];

export const AREAS = [
  "Golf Course Road",
  "Golf Course Extension Road",
  "Sohna Road",
  "DLF Phase 1 to 5",
  "Sector 45 to 57",
  "South City",
  "Sushant Lok",
  "Nirvana Country",
  "Dwarka Expressway",
  "New Gurugram",
  "MG Road",
];

export const labelFor = (list, id) => list.find((x) => x.id === id)?.label;
