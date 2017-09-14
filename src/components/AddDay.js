import React from "react";
import { Button, Popup, Icon } from 'semantic-ui-react';
import { addDay } from "../lib/actions";

export default class AddDay extends React.Component {

    render(){
        
        return(
            <Popup 
                trigger=
                {
                    <Button onClick={addDay}>Add Day</Button>
                }
                content="Click to Add Day"
                inverted
                simple
            />
        );
    }
}