import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "../containers/CalendarContainer";

export function getCalendar(){
    document.getElementById("root").innerHTML = "";
    render(
        <CalendarContainer />,
        document.getElementById("root")
    );
    //the data fetching is done INSIDE CalendarContainer.
}