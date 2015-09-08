/**
 * author high5<high525jp@gmail.com>
 */
var React = require('react');

var Sidebar = require('./Sidebar.react');

var Main = require('./Main.react');

var Store = require('../stores/Store');



function getState() {
  return {
    sidebarMenuList: Store.getSidebarMenuList(),
    hoge: "hoge",
  };
}



var App = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {

    //alert(this.state.sidebarMenuList);
    //alert("moge");

    var menu = "";
    //var content = "";


    for (var id in this.state.sidebarMenuList) {
      if (this.state.sidebarMenuList[id]['active'] == true) {
        menu = this.state.sidebarMenuList[id];
        //title = this.state.sidebarMenuList[id]['title'];
        //content = this.state.sidebarMenuList[id]['content'];
      }
    }

    return (
      <div className="row">
        <Sidebar
          menuList={this.state.sidebarMenuList}
        />
        <Main
          menu={menu}
        />
      </div>
    );
  }


});

module.exports = App;
