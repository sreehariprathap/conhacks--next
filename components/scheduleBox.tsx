import React from "react"
import Seperator from "./Seperator"

const ScheduleBox: React.FC<any> = ({ scheduleData }) => {
  const addMinutesToTime = (startTime: string, minutesToAdd: any) => {
    const [startHours, startMinutes] = startTime.split(".").map(Number)
    let totalMinutes = startHours * 60 + startMinutes + minutesToAdd
    let updatedHours = Math.floor(totalMinutes / 60)
    let updatedMinutes = totalMinutes % 60
    const updatedTime = `${String(updatedHours).padStart(2, "0")}.${String(
      updatedMinutes
    ).padStart(2, "0")}`
    return updatedTime
  }

  return (
    <div>
      <h3 className="text-2xl text-center my-2">{scheduleData.busData.go.start}</h3>
      <div className="flex items-start gap-4">
        <div className="flex p-2 w-5 h-5 rounded-full border-slate-100 border-4 justify-center items-center my-4">
          <div className="w-2 h-2 bg-slate-100 rounded-full"> </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="w-full bg-emerald-400 rounded-md p-4 mb-1 text-white">
            <h1>Leave by {scheduleData.busData.go.start}</h1>
            <Seperator />
            <h1>Get in bus {scheduleData.busData.go.busNumber[0]}</h1>
            <Seperator />
            <h1>
              Reach college by{" "}
              {addMinutesToTime(
                scheduleData.busData.go.start,
                scheduleData.busData.go.travelTime
              )}
            </h1>
          </div>
          <div className="w-full bg-cyan-400 rounded-md p-4 mb-1 flex flex-col gap-3 text-white">
            <h1 className="text-3xl font-bold">
              {scheduleData.classData.name}
            </h1>
            <h1 className="text-md font-medium">
              {scheduleData.classData.start} - {scheduleData.classData.end}
            </h1>
            <h1 className="text-md font-medium">
              classroom : {scheduleData.classData.classroom}
            </h1>
            {scheduleData.classData.isAssignment && <h1>Class Assignment</h1>}
            {scheduleData.classData.isExamination && <h1>Class Exam</h1>}
          </div>
          <div className="w-full bg-emerald-400 rounded-md p-4 mb-1 text-white">
            <h1>Leave by {scheduleData.busData.back.start}</h1>
            <Seperator />
            <h1>Get in bus {scheduleData.busData.back.busNumber[0]}</h1>
            <Seperator />
            <h1>
              Reach home by{" "}
              {addMinutesToTime(
                scheduleData.busData.back.start,
                scheduleData.busData.back.travelTime
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleBox
