"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import { Button } from "@nextui-org/react"

export default function Home() {
  useEffect(() => {
    const features = document.querySelectorAll(".feature")

    setTimeout(() => {
      features.forEach((feature, index) => {
        setTimeout(() => {
          feature.style.opacity = 1
          feature.style.transform = "translateY(0)"
        }, 500 * index)
      })
    }, 1000)
  }, [])
  return (
    <div>
	  <div className="intro-container">
        <h1 className="text-5xl">Welcome to LectureLife</h1>
        <div className="w-full flex justify-center p-5">
          <Image src={"/favicon.ico"} width={"300"} height={"300"} alt="logo" />
        </div>
        <p className="intro-text">
          Your College Schedule Planner and Transportation Guide
        </p>
        <Button color="primary">
          Get Started
        </Button>
      </div>

      <div className="features-container">
        <div className="feature">
          <h3>Custom Schedule</h3>
          <p>
            Create a personalized schedule that fits your classNamees and
            activities.
          </p>
        </div>

        <div className="feature">
          <h3>Transportation Info</h3>
          <p>
            Access detailed information on bus routes, parking, and alternative
            transportation options.
          </p>
        </div>

        <div className="feature">
          <h3>Notifications</h3>
          <p>
            Receive reminders and notifications for your upcoming lectures and
            events.
          </p>
        </div>
      </div>
    </div>
  ) 
}
