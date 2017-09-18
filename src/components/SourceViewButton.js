import React from "react";
import { Button, Popup, Icon } from 'semantic-ui-react'

export default class SourceViewButton extends React.Component {




    render(){
        
        return(
            <Popup 
                trigger={<Icon name="heart" color="grey" style={{margin: "auto", display: "block"}}/>}
                content={
                    <div style={{textAlign: "center"}}>
                        <p>Made with <Icon name="heart" color="red" onClick={() => {
                            console.log("Let's make this page really ugly! With comic sans!");
                            document.getElementById("root").className = "lolified";   
                        }}/> by The Mirman School</p>
                        <Button onClick={() => {
                            window.open("https://github.com/mirman-school/my-schedule");    
                        }}>View source on Github</Button>
                    </div>
                }
                on="click"
            />
        );
    }
}