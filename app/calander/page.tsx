import CalanderComponent from "@/components/Calander"
import Event from "@/components/Event"
import EventCard from "@/components/EventCard"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import React from "react"
import { cookies } from 'next/headers';
import { redirect } from "next/navigation"
import { Database } from "@/types/supabase"
import dayjs from "dayjs"

export default async function Calander() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return redirect('/login');

  const events = await supabase.from('events')
      .select()
      .eq('user_id', session.user.id)
      .gte('start_timestamp', dayjs().startOf('day'))
      .lte('end_timestamp', dayjs().endOf('day'));

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-medium mb-3">Calander</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <CalanderComponent />
        </div>
        <div className="flex flex-col gap-3">
          {events.count === 0 ? (
            <p>No events found for the day!</p>
          ) : null}
          {events.data?.map((event) => (
            <Event eventData={event} key={event.event_id} isFirstItem={true} />
          ))}
        </div>
      </div>
    </div>
  )
}
