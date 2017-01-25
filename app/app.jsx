import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'Nav';
import Timer from 'Timer';
import CountDown from 'CountDown';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
         <IndexRoute component={Timer}/>
         <Route path="/countdown" component={CountDown}/>
      </Route>
    </Router>,
    document.getElementById('app')
  );
