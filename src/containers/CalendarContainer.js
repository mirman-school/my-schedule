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

        //const db = firebase.firestore();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken; //seeecret
            var user = result.user;

            // ************************************************************
            // *DELETE THIS CONSOLE.LOG WHEN DONE TO AVOID SECURITY FLAWS!*
            // ************************************************************
            console.log(user);

            }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;

            // ************************************************************
            // *DELETE THIS CONSOLE.LOG WHEN DONE TO AVOID SECURITY FLAWS!*
            // ************************************************************
            console.log("We couldnt log in! Err: " + errorCode + ", errmsg: " + errorMessage + ", email: " + email + ", cred: " + credential);
        });


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
