import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "../containers/CalendarContainer";
import SourceViewButton from "../components/SourceViewButton";
import SignIn from "../components/SignIn";


export function changeCellData(day, period, newVal){
    console.debug("Changing cell data. Day: " + day + ", period: " + period + ", new value: " + newVal);
}

export function changeDayData(day, name){
    console.debug("Changing day data. Day: " + day + ", New name: " + name);
}
export function changePeriodData(period, name, start, end){
    console.debug("Changing period data. Period: " + period + ", name: " + name + ", time: " + start + "-" + end + ".");
}

export function deletePeriod(period){
    console.debug("Deleting period " + period);
}

export function deleteDay(day){
    console.debug("Deleting Day " + day);
}

export function addDay(){
    console.debug("Adding a new day!");
}

export function addPeriod(){
    console.debug("Adding a new period!");
}