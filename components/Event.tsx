import React from "react"
import dayjs from "dayjs"

const Event: React.FC<any> = ({ eventData, isFirstEvent }) => {
  return (
    <div className="flex flex-col gap-3 bg-slate-900 p-3 shadow-md">
      <h1 className="text-2xl">{eventData.type}</h1>
      <h1>{eventData.location}</h1>
      <p>
        {eventData.summary}
      </p>


      <p>You should leave at {dayjs(eventData.start).subtract(1, 'hour').toString()}</p>
    </div>
  )
}

export default Event
