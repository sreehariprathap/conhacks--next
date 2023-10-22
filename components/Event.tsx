import React from "react"

const Event: React.FC<any> = ({ eventData }) => {
  return (
    <div className="flex flex-col gap-3 bg-slate-900 p-3 shadow-md">
      <h1 className="text-2xl">{eventData.type}</h1>
      <h1>{eventData.location}</h1>
      <a href={eventData.description} target="_blank">
        {eventData.description}
      </a>
    </div>
  )
}

export default Event
