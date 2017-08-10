import React from "react";
import { Button, Popup } from 'semantic-ui-react'

export default class EditBox extends React.Component {

    render(){
        return(
            <Popup 
            trigger={this.props.trigger}
            content={<h1>Hello there!</h1>}
            on="click"
            />
        );
    }

}