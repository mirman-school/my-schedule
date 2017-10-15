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
        var data;
        chrome.storage.sync.get("cred", function(res){
            console.log("TRYING to get cred from chrome storage...")
            if(chrome.runtime.error){
                console.error("Whoa there! We found a chrome runtime error in storage.get!");
                data = null;
            }else{
                console.log("Res:");
                console.log(res);
                console.log("Data:");
                data = res.cred;
                console.log(data);
                console.log("Data get success. It still may be null at this point.");
            }

            
                
            if(data == null || data == undefined){ //if there is no storage
                //else get cred from chrome
                console.log("Data is null. Now getting auth token from chrome identity...");
                chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
                    console.log("Successfully retrieved chrome auth token. Token:");
                    console.log(token);
                    credential = firebase.auth.GoogleAuthProvider.credential(null, token);
                    chrome.storage.sync.set({"cred": credential}, function() {
                        console.log("Extracted firebase cred, now saving the cred in chrome storage");
                        if(chrome.runtime.error){
                            console.error("Whoa there! We found a chrome runtime error in storage.set!");
                        }
                        console.log("Credential:");
                        console.log(credential);
                        firebase.auth().signInWithCredential(credential);
                    });
                });
            }else{
                //use data
                credential = data;
                console.log("If the following is true, then something went REALLY wrong...");
                console.log(data == undefined);
                console.log("Data is not null. Using the data to sign in.");
                console.log("Credential:");
                console.log(credential);
                firebase.auth().signInWithCredential(credential);
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
