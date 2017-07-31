import React from "react";
import {render} from "react-dom";
import {Button} from "semantic-ui-react";

//import my components
import Calendar from "./react_components/Calendar"

render(
    <div>
    <Calendar/>
    <Button>Click Here</Button></div>, document.getElementById("root")
);
/*
const MySchedule = () => {
    return (
        <h1>My Schedule</h1>
    )
}
*/