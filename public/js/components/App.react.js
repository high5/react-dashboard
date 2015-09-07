/**
 * author high5<high525jp@gmail.com>
 */
var React = require('react');

var Sidebar = require('./Sidebar.react');

var Main = require('./Main.react');

window.$ = window.jQuery = require('jquery');

var App = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="row">
        <Sidebar  />
        <Main />
      </div>
    );
  },

  /**
   */
  _onChange: function() {
  }

});

module.exports = App;
