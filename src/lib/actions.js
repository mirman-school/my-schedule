import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "../containers/CalendarContainer";

export function getCalendar(){
    console.log("Rendering!");
    document.getElementById("root").innerHTML = "";
    render(
        <CalendarContainer />,
        document.getElementById("root")
    );
    //the data fetching is done INSIDE CalendarContainer.
}
export function changeCellData(day, period, newVal){
    console.debug("Changing cell data. Day: " + day + ", period: " + period + ", new value: " + newVal);
}