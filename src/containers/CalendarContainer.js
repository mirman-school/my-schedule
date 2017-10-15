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
        data = res.cred;
        console.log(data);
        console.log("CalCon: Data get success. It still may be null at this point.");
    }

    if(data !== null && data !== undefined){
        console.log("Calcon: We got the data, and it's not null");
        firebase.initializeApp(firebaseConfig);
        var credObj = Object.create(firebase.auth.AuthCredential, data); //this is equivalent to casting... and I have to do this because it wants its own Interface, not my jsobj! Appearently, when storing with chrome.storage, it gets converted. DISCLAIMER this is my assumption not fact, so i'm not 100% sure that this is the right way to do it...
        firebase.auth().signInWithCredential(data).catch(function(err){
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
