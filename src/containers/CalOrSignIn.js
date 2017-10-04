import React from "react";
import CalendarContainer from "./CalendarContainer";
import SignIn from "../components/SignIn";

export default class CalOrSignIn extends React.Component {


    render() {
        var signedIn = true;
        if(signedIn){
            return(
                // the data fetching is done INSIDE CalendarContainer.
                <CalendarContainer />
            );
        }else{
            return(
                <SignIn />
            );
        }
    }
}
