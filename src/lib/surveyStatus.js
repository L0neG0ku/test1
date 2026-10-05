/* Remembers, per browser, that this visitor has already completed the survey,
   so the homepage stops asking them to take it (or join the waitlist, since
   the survey already collected their details).

   localStorage can throw or be empty in private windows and with blocked site
   data, so every access is guarded. If it fails the visitor simply sees the
   buttons again, which is harmless. */

const KEY = "kribble.survey.completed";

export function markSurveyDone() {
  try {
    localStorage.setItem(KEY, new Date().toISOString());
  } catch {
    /* storage unavailable: nothing to remember */
  }
}

export function hasDoneSurvey() {
  try {
    return Boolean(localStorage.getItem(KEY));
  } catch {
    return false;
  }
}
