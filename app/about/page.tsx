"use client"
import React from "react"
import { Button } from "@nextui-org/react"
import Image from "next/image"

const page = () => {
  return (
    <div>
      <div className="bg-transparent text-white flex items-center justify-center flex-col h-screen">
        <div className="profile-container text-center p-4">
          <div className="flex justify-center ">
            <img src="/luffy.avif"  className="borderd rounded-full w-96 h-96 cover"/>
          </div>
        
          <div className="user-info p-4">
            <p className="user-name text-2xl text-blue-400">John Doe</p>
            <p className="address text-lg">1234 Elm Street, City, Country</p>
            <p className="course text-3xl text-blue-400">
              Studying: Computer Science
            </p>
          </div>
          
          <div className="button-container mt-4">
          <Button color="primary">
          Edit
        </Button>
        &nbsp; &nbsp;
        <Button color="danger">
          Logout
        </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
