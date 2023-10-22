import React from "react"
import ScheduleBox from "@/components/scheduleBox"
const Home = () => {
  const times = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]
  const schedules = [
    {
      classData : {
        name:"Prog 8021",
        start:"10.00",
        end:"13.00",
        isAssignments:false,
        isExamination:false,
        classroom: "3F06"
      },
      busData: {
        go: {
          start: "9.00 ",
          travelTime: 30,
          busNumber:[6],
          isMultiBus: false,
        }, back:{
          start: "13.30 ",
          travelTime: 30,
          busNumber:[8],
          isMultiBus: false,
        }
      }
      
    },
    {
      classData : {
        name:"Prog 8022",
        start:"19.00",
        end:"20.00",
        isAssignments:false,
        isExamination:false,
        classroom: "3F06"
      },
      busData: {
        go: {
          start: "18.00 ",
          travelTime: 30,
          busNumber:[6],
          isMultiBus: false,
        }, back:{
          start: "20.30 ",
          travelTime: 30,
          busNumber:[8],
          isMultiBus: false,
        }
      }
      
    },
  ]
  return (
    <div className="flex flex-row gap-5 w-[100%]">
      <div className="w-10 hidden">
        <ul className="flex flex-col gap-10">
          {times.map((time) => (
            <li
              key={time}
              className="w-10 h-10 flex justify-center items-end font-medium"
            >
              <h1>{time}</h1>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        {schedules.map((schedule,index) => ( 
          <ScheduleBox key={index} scheduleData={schedule}/>
         ))}
      </div>
    </div>
  )
}

export default Home
