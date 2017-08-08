import React from "react";
import Calendar from "../components/Calendar";

export default class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarData: {}
        }
    }

    componentDidMount() {
        fetch("../../testdata.json", {
            method: "get"
        }).then((response) => {
            return response.json();
        }).then((json) => {
            const calendarData = json.testData;
            this.setState({calendarData});
        }) 

    }

    render() {
        return (
            <Calendar calendarData={this.state.calendarData} />
        );
    }
}
