import React from "react";
import Calendar from "../components/Calendar";
import SourceViewButton from "../components/SourceViewButton";
import AddDay from "../components/AddDay";
import AddPeriod from "../components/AddPeriod";
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
            <div>
                <Calendar calendarData={this.state.calendarData} key="calendar"/>
                <AddDay/>
                <AddPeriod/>
                <SourceViewButton/>
            </div>
        );
    }
}
