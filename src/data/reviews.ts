/**
 * REAL reviews only. Copy them word for word from Google/Facebook with the reviewer's permission.
 * Leave empty until you have genuine reviews. Never invent reviews or ratings:
 * Google treats fake or self-serving review markup as spam.
 * TODO(owner): add real reviews here.
 */
export type Review = {
  name: string; // first name + initial is fine
  text: string;
  source: "Google" | "Facebook";
  date: string; // YYYY-MM-DD
  service?: string;
};

export const REVIEWS: Review[] = [];
