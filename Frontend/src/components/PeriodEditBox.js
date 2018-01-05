import React from "react";
import { Button, Popup, Input, Header, Divider } from 'semantic-ui-react'

export default class PeriodEditBox extends React.Component {

    render(){
        var textId = "periodedit-" + this.props.id + "-text";
        var timeStartId = "periodedit-" + this.props.id + "-timestart";
        var timeEndId = "periodedit-" + this.props.id + "-timeend";
        var content = (
            <div>
                <h2>Name</h2>
                <Input focus placeholder={this.props.fillerText} id={textId}/>
                <h2>Time Start</h2>
                <Input type="time" id={timeStartId} />
                <h2>Time End</h2>
                <Input type="time" id={timeEndId} />
                <Divider/>
                <Popup
                    trigger={
                        <Button negative>Delete</Button>
                    }
                    content={
                        <div>
                        <Header as="h1">Hey there!</Header>
                        <p>Deleting the period will also delete any cells in the period.</p>
                        <Button negative onClick={this.props.onDelete}>I understand. Delete it!</Button>   
                        </div>
                    }
                    on="click"
                />
                <Button
                    positive
                    onClick={
                        (event, data) => {
                            this.props.onClick(event, data, textId, timeStartId, timeEndId);
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
            header="Edit Period"
            />
        );
    }
}