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
    const firebaseConfig = config.firebase;
    var data = null;
    chrome.storage.sync.get("cred", function(res){
    if(chrome.runtime.error){
        console.error("CalCon: Whoa there! We found a chrome runtime error in storage.get!");
        data = null;
    }else{
        data = res.cred; 
    }

    if(data !== null && data !== undefined){
        firebase.initializeApp(firebaseConfig);
        var credential = firebase.auth.GoogleAuthProvider.credential(null, data); //Wow. I spent 3 hours on this, and all I had to do was add "null, "
        firebase.auth().signInWithCredential(credential).catch(function(err){ //https://github.com/firebase/quickstart-js/issues/133... oh no now i'm getting this... https://github.com/prescottprue/react-redux-firebase/issues/87
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.error('Failed to login user ' + email + " with cred " + credential + ". Code: " + errorCode + ", msg: " + errorMessage);
        });
    }else{
        console.error("CalCon: Chrome storage data is NULL! You'll have to tell background.js...");
    }

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
