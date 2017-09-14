import React from "react";
import Calendar from "../components/Calendar";

import SourceViewButton from "../components/SourceViewButton";
import AddDay from "../components/AddDay";
import AddPeriod from "../components/AddPeriod";
import config from "../config";
import firebase from "firebase";

export default class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarData: {}
        }
    }

    componentDidMount() {
        // Firebase initialization. Does not do auth
        const firebaseConfig = config.firebase;
        firebase.initializeApp(firebaseConfig);

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
