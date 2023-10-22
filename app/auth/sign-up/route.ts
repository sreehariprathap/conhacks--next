import { Database } from '@/types/supabase';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import ical from 'node-ical';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const calendarLink = String(formData.get('calendar'))

  if (!calendarLink.trim()) {
    throw new Error('Calendar link is required.')
  }

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  const auth = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  if (auth.error) {
    const redirectUrl = new URL(requestUrl.origin);
    const params = new URLSearchParams();
    params.append('message', auth.error.message);
    redirectUrl.search = params.toString();

    return NextResponse.redirect(redirectUrl, {
      status: 301,
    })
  }

  const userId = auth.data.user?.id;
  if (!userId) throw new Error('user id not found');

  const result = await ical.async.fromURL('https://conestoga.desire2learn.com/d2l/le/calendar/feed/user/feed.ics?token=ahmqn9ndeahnazoj325bb');

  await Promise.all(Object.entries(result).filter((entry) => {
    const value = entry[1] as ICalendarEvent | undefined | null;

    return !!value && !!value.start && !!value.end;
  }).map((entry) => {
      const value = entry[1] as ICalendarEvent;

      return supabase.from('events').insert({
        user_id: userId,
        start_timestamp: value?.start.toISOString(),
        end_timestamp: value?.end.toISOString(),
        method: value?.method,
        class: value?.class,
        dtstamp: value?.dtstamp.toISOString(),
        summary: value?.summary,
        uid: value?.uid,
        location: value?.location,
        sequence: Number(value?.sequence),
        event_type: value?.type,
        description: value?.description,
        last_modified: value?.lastmodified.toISOString(),
    })
  }));

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}

interface ICalendarEvent {
  type: string;
  params: string[];
  dtstamp: Date;
  summary: string;
  location: string;
  description: string;
  class: string;
  start: Date;
  datetype: string;
  end: Date;
  uid: string;
  sequence: string;
  lastmodified: Date;
  method: string;
}
