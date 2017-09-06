import React from "react";
import { Button, Popup, Input } from 'semantic-ui-react'

export default class DayEditBox extends React.Component {

    render(){
        var myId = "dayedit-" + this.props.id + "-text";
        var content = (
            <div>
                <Input focus placeholder={this.props.fillerText} id={myId}/>
                <Button
                    positive
                    onClick={
                        (event, data) => {
                            this.props.onClick(event, data, myId);
                        }
                    }
                >
                    Save
                </Button>
            </div>
        );
        return(
            <Popup 
            trigger={this.props.trigger}
            content={content}
            on="click"
            header="Edit Day"
            />
        );
    }
}