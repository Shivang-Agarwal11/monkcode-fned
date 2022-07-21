import React, { Component } from "react";

import { List, ListItemText,ListItem } from "@material-ui/core";

export class Display extends Component{
    render(){
        return (
            <div>
            {
                this.props.details.length>0 && (
            <List>
            {(this.props.details).map((detail)=>
        <ListItem>
            {this.props.value.length>0 ? (
                <ListItemText primary={detail[this.props.value]}/>)
                :(<ListItemText primary={detail}/>)
            }
        </ListItem>
            )}

    </List>
            )
        }
        </div>
        );
    }
}

export default Display;
