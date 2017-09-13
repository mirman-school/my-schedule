import React from "react";
import { Button, Popup, Icon } from 'semantic-ui-react';
import { addPeriod } from "../lib/actions";

export default class AddPeriod extends React.Component {

    render(){
        
        return(
            <Popup 
                trigger=
                {
                    <Button onClick={addPeriod}>Add Period</Button>
                }
                content="Click to Add Period"
                inverted
                simple
            />
        );
    }
}