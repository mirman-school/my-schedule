import React from "react";
import {render} from "react-dom";
//import my components
import Calendar from "./react_components/Calendar"

render(
    <Calendar days={4} periods={8}/>, document.getElementById("root")
);
/*
const MySchedule = () => {
    return (
        <h1>My Schedule</h1>
    )
}
*/