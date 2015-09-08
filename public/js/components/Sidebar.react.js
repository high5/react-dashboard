/**
 * Created on 15/09/07.
 */
var React = require('react');
var SidebarMenu = require('./SidebarMenu.react');
var Store = require('../stores/Store');


var Sidebar = React.createClass({

  getInitialState: function() {
    return {
      menuList: this.props.menuList
    };
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    var stateMenuList = this.state.menuList;
    var menuList = [];


    for (var key in stateMenuList) {
      menuList.push(<SidebarMenu key={key} menu={stateMenuList[key]} />);
    }

    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">{menuList}</ul>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(
      {
        menuList: Store.getSidebarMenuList()
      }
    );
  }


});

module.exports = Sidebar;

