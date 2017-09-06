import React from "react";
import {render} from "react-dom";
//import my components
import CalendarContainer from "./containers/CalendarContainer";
import SourceViewButton from "./components/SourceViewButton";

render(
    // the data fetching is done INSIDE CalendarContainer.
    <CalendarContainer />,
    document.getElementById("root")
);