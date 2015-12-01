import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <ListItem
                leftAvatar={<Avatar src="http://img01.ibnlive.in/ibnlive/uploads/2012/05/jcm2.jpg"/>}>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;