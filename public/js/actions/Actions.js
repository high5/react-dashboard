var $ = require("jquery");

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  clickSidebarMenu: function(id) {
    AppDispatcher.dispatch({
      actionType: Constants.CLICK_SIDEBAR_MENU,
      id:id
    });
  }
};

module.exports = Actions;
