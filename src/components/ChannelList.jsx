import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class ChannelList extends React.Component {
    constructor() {
        super();
        this.state = {
            channels: [
                'Dogs',
                'Cats'
            ]
        }
    }

    render(){
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel channel={channel} />
            );
        });

        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;