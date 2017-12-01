import React from "react";
import Calendar from "../components/Calendar";

import SourceViewButton from "../components/SourceViewButton";
import AddDay from "../components/AddDay";
import AddPeriod from "../components/AddPeriod";
import config from "../config";
import * as firebase from "firebase";
import "firebase/firestore";

export default class CalendarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarData: {}
        }
    }

    componentDidMount() {
    const firebaseConfig = config.firebase;

    firebase.initializeApp(firebaseConfig);
    chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
        //console.log(token);
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        var credential = provider.credential(null, token);
        //console.log(credential);
        firebase.auth().signInWithCredential(credential).then(function(result){
            console.log("Signed in!!");
            var token = result.accessToken;
            var user = result.user;
            chrome.identity.getProfileUserInfo(function(identity){
                var uid = identity.id;
                console.log(identity);
                var db = firebase.firestore();
                var docname = "users";
                var docRef = db.collection(docname).doc(uid);
            
                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        console.log(doc.data);

                    }else{
                        console.log("No such document! Creating one...");
                        db.collection(docname).doc(uid).set({
                            "cells": [],
                            "days": [],
                            "periods": []
                        }).then(function(){
                            console.log("Document created!");
                        });
                    }
                }).catch(function(err){
                console.error("Error getting doc: " + err);
                });

            });
            
            
        }).catch(function(error){ //https://github.com/firebase/quickstart-js/issues/133... oh no now i'm getting this... https://github.com/prescottprue/react-redux-firebase/issues/87
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var errcred = error.credential;
            console.error("Failed to login. Code: " + errorCode + ", msg: " + errorMessage);
        });

        

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
