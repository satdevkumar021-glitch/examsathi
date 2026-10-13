-- Additive: per-topic result of each server-scored attempt, so weak topics and streaks can be
-- computed for a signed-in learner on any device. Written only by the API (service role) after scoring.
-- Existing rows keep an empty breakdown and simply do not contribute to weak-topic analysis.
alter table public.examsathi_attempts
  add column if not exists topic_breakdown jsonb not null default '[]'::jsonb
  check (jsonb_typeof(topic_breakdown) = 'array' and octet_length(topic_breakdown::text) <= 32768);
