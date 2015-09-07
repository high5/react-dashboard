/**
 * Created on 15/09/07.
 */
var React = require('react');

var Sidebar = React.createClass({

  getInitialState: function() {
    return null;
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
    );
  },

  /**
   */
  _onChange: function() {
  }

});

module.exports = Sidebar;

