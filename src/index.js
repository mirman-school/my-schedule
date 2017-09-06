import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "./containers/CalendarContainer";

render(
    // the data fetching is done INSIDE CalendarContainer.
    <CalendarContainer />,
    document.getElementById("root")
);