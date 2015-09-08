/**
 * Created on 15/09/07.
 */
var React = require('react');
var Actions = require('../actions/Actions');

var SidebarMenu = React.createClass({

  getInitialState: function() {
    return {
      menu: this.props.menu
    };
  },


  /**
   * @return {object}
   */
  render: function() {
    var menu = this.state.menu;
    if (menu.active) {
      return (
        <li className="active"><a onClick={this._onClick}  href="#">{menu.title}<span className="sr-only">(current)</span></a></li>
      );

    } else {
      return (
        <li><a onClick={this._onClick} href="#">{menu.title}</a></li>
      );
    }

  },

  _onClick: function() {
    Actions.clickSidebarMenu(this.props.menu.id);
  }

});

module.exports = SidebarMenu;

