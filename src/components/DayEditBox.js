import React from "react";
import { Button, Popup, Input, Header, Divider } from 'semantic-ui-react';
export default class DayEditBox extends React.Component {

    render(){
        var myId = "dayedit-" + this.props.id + "-text";
        var content = (
            <div>
                <Input focus placeholder={this.props.fillerText} id={myId}/>
                <Divider/>
                <Popup
                    trigger={<Button negative>Delete</Button>}
                    content={
                        <div>
                            <Header as="h1">Hey there!</Header>
                            <p>Deleting the day will also delete any cells in the day.</p>
                            <Button negative onClick={this.props.onDelete}>I understand. Delete it!</Button>   
                        </div>
                    }
                    on="click"
                 />
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