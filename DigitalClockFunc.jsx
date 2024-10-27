import { useState,useEffect } from "react";
import './digitalclock.css'
import DigitalClock from "./digitalclock";
const DigitalClockFunc=()=>{
    const[time,setTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());},1000);
            return()=>{
                clearInterval(timer);
            }
        },[]);
const hours=String(time.getHours()).padStart(2,'0');
const minutes=String(time.getMinutes()).padStart(2,'0');
const seconds=String(time.getSeconds()).padStart(2,'0');
return(
    <div className="digital-clock">
    <div className ="digit">{hours[0]}</div>
            <div className ="digit">{hours[1]}</div>
            <div className ="colon">:</div>
            <div className ="digit">{minutes[0]}</div>
            <div className ="digit">{minutes[1]}</div>
            <div className="colon">:</div>
            <div className ="digit">{seconds[0]}</div>
            <div className ="digit">{seconds[1]}</div>
        </div>
)
};
export default DigitalClockFunc;
