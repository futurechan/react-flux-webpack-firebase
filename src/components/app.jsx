import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import theme from '../theme';

var ThemeManager = mui.Styles.ThemeManager;
var AppBar = mui.AppBar;

class App extends React.Component {
    constructor() {
        super();

    }
    
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }
    
    getChildContext(){
        return {
            muiTheme: ThemeManager.getMuiTheme(theme)
        }
    }

    render(){
        return (

            <div>            
                <AppBar title="Awesome Chat App"/>
                <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                    <ChannelList />
                    <MessageList />
                </div>
                <MessageBox />
            </div>
        );
    }
}

export default App;