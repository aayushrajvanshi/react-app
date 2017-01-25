import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component{
    render(){
        return (
      <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
              <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
            </li>
          </ul>
        </div>
        </div>
    )
    }
}