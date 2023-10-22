ALTER TABLE public.events
ADD user_id uuid not null references auth.users on delete cascade;
