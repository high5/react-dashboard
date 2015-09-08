/**
 * Created on 15/09/07.
 */
var React = require('react');
var ContentOverview = require('./ContentOverview.react');
var ContentAnalytics = require('./ContentAnalytics.react');
var ContentReports = require('./ContentReports.react');
var ContentExport = require('./ContentExport.react');
var Store = require('../stores/Store');

var Main = React.createClass({

  getInitialState: function() {
    return {
      id:this.props.menu.id,
      title:this.props.menu.title,
      content:this.props.menu.content
    };
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    var content;

    if (this.state.id == 1) {
      content =
        <ContentOverview
        />;
    }

    if (this.state.id == 2) {
      content =
        <ContentReports
        />;
    }

    if (this.state.id == 3) {
      content =
        <ContentAnalytics
        />;
    }

    if (this.state.id == 4) {
      content =
        <ContentExport
        />;
    }

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">{this.state.title}</h1>
        <div>{content}</div>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {

    var menuList = Store.getSidebarMenuList();
    var menu = null;


    for (var id in menuList) {
      if (menuList[id]['active'] == true) {
        menu = menuList[id];
      }
    }

    this.setState(
      {
        id: menu.id,
        title: menu.title,
        content: menu.content
      }
    );
  }

});

module.exports = Main;

