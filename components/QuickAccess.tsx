"use client"
import React from "react"
import {Tabs, Tab} from "@nextui-org/react";

const QuickAccess = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
          <Tabs
            color={"secondary"}
            aria-label="Tabs colors"
            radius="full"
          >
            <Tab key="1" title="Home" />
            <Tab key="2" title="Calander" />
            <Tab key="3" title="About" />
          </Tabs>
      </div>
    </div>
  )
}

export default QuickAccess
