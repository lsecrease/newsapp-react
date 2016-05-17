var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({
  render: function() {

    var navStyle = {
      color: '#fff',
      fontSize: '30'
    };

    return (
      <div style={navStyle}>
        <div className="row">
        <div onClick={this.setActive} className="col-xs-6">
          <Link style={navStyle} to="/"><h4>NEWS</h4></Link>
        </div>
        <div className="col-xs-6">
           <Link style={navStyle} to="/photos"><h4>PHOTOS</h4></Link>
         </div>
        </div>
      </div>
    );
  }
});

module.exports = Menu;
