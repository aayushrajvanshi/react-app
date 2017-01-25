import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'Nav';
import Timer from 'Timer';
import CountDown from 'CountDown';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
              {this.props.children}
            </div>
        );
    }
}
