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
    console.log("CalCon: TRYING to get cred from chrome storage...")
    if(chrome.runtime.error){
        console.error("CalCon: Whoa there! We found a chrome runtime error in storage.get!");
        data = null;
    }else{
        console.log("CalCon: Res:");
        console.log(res);
        console.log("CalCon: Data (access token):");
        data = res.cred; //ok, let's try to get the token, not the actual cred, because it jsonifies it
        console.log(data);
        console.log("CalCon: Data get success. It still may be null at this point.");
    }

    if(data !== null && data !== undefined){
        console.log("Calcon: We got the data, and it's not null");
        firebase.initializeApp(firebaseConfig);
        var credential = firebase.auth.GoogleAuthProvider.credential(data);
        firebase.auth().signInWithCredential(null, credential).catch(function(err){ //https://github.com/firebase/quickstart-js/issues/133
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.error('Failed to login user ' + email + " with cred " + credential + ". Code: " + errorCode + ", msg: " + errorMessage);
        });
    }else{
        console.error("CalCon: Chrome storage data is NULL! You'll have to tell background.js...");
        console.log(data);
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
