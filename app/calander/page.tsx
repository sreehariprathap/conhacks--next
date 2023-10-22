import CalanderComponent from "@/components/Calander"
import Event from "@/components/Event"
import EventCard from "@/components/EventCard"
import React from "react"

const evenetsAndClasses = [
  {
    type: "VEVENT",
    params: [],
    dtstamp: [Date],
    summary: "Class",
    location: "ENGL71200-23F-Sec1-Scientific and Technical Commun",
    description:
      "https://conestogac.zoom.us/j/93579562472?pwd=Q0tOY0QyYXRWRys1Z0lyS3gxeVFSUT09",
    class: "PUBLIC",
    start: [Date],
    datetype: "date-time",
    end: [Date],
    uid: "6606-3176568@conestoga.desire2learn.com",
    sequence: "1",
    lastmodified: [Date],
    method: "PUBLISH",
  },
  {
    type: "VEVENT",
    params: [],
    dtstamp: [Date],
    summary: "Class",
    location: "ENGL71200-23F-Sec1-Scientific and Technical Commun",
    description:
      "https://conestogac.zoom.us/j/93579562472?pwd=Q0tOY0QyYXRWRys1Z0lyS3gxeVFSUT09",
    class: "PUBLIC",
    start: [Date],
    datetype: "date-time",
    end: [Date],
    uid: "6606-3176568@conestoga.desire2learn.com",
    sequence: "1",
    lastmodified: [Date],
    method: "PUBLISH",
  },
]
const Calander = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-medium mb-3">Calander</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <CalanderComponent />
        </div>
        <div className="flex flex-col gap-3">
          {evenetsAndClasses.map((event, index) => (
            <Event eventData={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calander
