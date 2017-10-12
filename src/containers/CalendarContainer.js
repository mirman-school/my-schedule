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
        var credential;
        if(false){ //if cookie
            credential = chrome.storage.sync.get("cred", function(res){
                credential = res.cred;
            });
        }else{
            //else get cred from chrome
            chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
                credential = firebase.auth.GoogleAuthProvider.credential(null, token);
            });
            chrome.storage.sync.set({'cred': credential}, function() {
                console.log("My Schedule firebase cred saved in chrome.storage");
            });
        }
        console.log(credential);
        firebase.auth().signInWithCredential(credential);
        
        
        
        


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
