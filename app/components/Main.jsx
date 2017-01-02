import React from 'react';

var Main = React.createClass({
    render: function() {
        return (
            <div>
              <p>Main.jsx Rendered</p>
              {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
