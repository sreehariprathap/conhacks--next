"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalanderComponent = () => {
  const [value, onChange] = useState<Value>(new Date());
  const tad =()=>{

    console.log(onChange)
  }

  
  return (
    <div className=" rounded-md p-5 bg-slate-900 shadow-md h-full">
      <Calendar onChange={onChange} value={value} onClickDay={tad}/>
    </div>
  );
}

export default CalanderComponent