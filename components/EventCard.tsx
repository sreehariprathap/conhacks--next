"use client"
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";

const EventCard: React.FC<any> = ({eventData}) => {
  return (
    <div>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          {/* <p className="text-md">{eventDetails.name}</p> */}name
          {/* <p className="text-small text-default-500">{eventDetails.time}</p> */}sasas
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        {/* <p>{eventDetails.description}</p> */} lorem20
      </CardBody>
      <Divider/>
      <CardFooter>

      </CardFooter>
    </Card>
    </div>
  )
}

export default EventCard

