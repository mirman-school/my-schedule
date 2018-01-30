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
        
        var provider = new firebase.auth.GoogleAuthProvider();
            
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                GetData((data) => {
                    this.state.calendarData = data;
                });
            }
        
        
        });
    }
 
    GetData(callback){
        var docname = "users";
        var docRef = db.collection(docname).doc(uid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                callback(doc.data);
            }else{
                console.log("No such document! Creating one...");
                db.collection(docname).doc(uid).set({
                    "cells": [],
                    "days": [],
                    "periods": []
                }).then(function(){
                    console.log("Document created!");
                    GetData(callback);
                });
            }
        }).catch(function(err){
            console.error("Error getting doc: " + err);
        });
    }
        
}