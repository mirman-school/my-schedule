import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "../containers/CalendarContainer";
import SourceViewButton from "../components/SourceViewButton";

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