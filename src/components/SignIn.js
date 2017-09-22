import React from "react";
import { Header, Button } from 'semantic-ui-react';
import Center from "react-center";
import Spacer from "./Spacer";

export default class SignIn extends React.Component {

    render(){
        return(
            <div>
                <Center><Header as="h1">Hello.</Header></Center>
                <Spacer height="200px"/>
                <Center><Header as="h2">Sign in to get started.</Header></Center>
                <Center><Button>Replace me with an official Sign In With Google button!</Button></Center>
            </div>
        );
    }
}