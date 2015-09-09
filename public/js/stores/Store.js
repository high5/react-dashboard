var $ = require("jquery");

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


/*
var _todos = {};


function create(id, text) {

  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };

}

function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

function updateAll(updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}
*/


var _sidebarMenuList = {
  1:{
    "id": 1,
    "title":"Overview",
    "hash":"overview",
    "content":"content1",
    "active":true
  },
  2:{
    "id": 2,
    "title":"Reports",
    "hash":"reports",
    "content":"content2",
    "active":false
  },
  3:{
    "id": 3,
    "title":"Analytics",
    "hash":"analytics",
    "content":"content3",
    "active":false
  },
  4:{
    "id": 4,
    "title":"Export",
    "hash":"export",
    "content":"content4",
    "active":false
  }
};

/*
function activateSidebarMenu(id) {
  for (var idx in _sidebarMenuList) {
    if (idx == id) {
      _sidebarMenuList[idx]['active'] = true;
    } else {
      _sidebarMenuList[idx]['active'] = false;
    }
  }
}
*/


var Store = assign({}, EventEmitter.prototype, {


  /**
   * Get the entire collection of Menu.
   * @return {object}
   */
  getSidebarMenuList: function() {
    /*
    var hash = location.hash;

    if (hash) {
      var hashId = hash.replace("#", "");
      console.log(hashId);
      console.log(hash);
      for (var idx in _sidebarMenuList) {
        if ("#" + idx == hash) {

        }
      }
    }
    */


    //console.log(location.hash);
    //console.log("hoge");
    /*
    _sidebarMenuList = [
      {
        "id": "overview",
        "title":"Overview",
        "active":true
      },
      {
        "id": "reports",
        "title":"Reports",
        "active":false
      },
      {
        "id": "analytics",
        "title":"Analytics",
        "active":false
      },
      {
        "id": "export",
        "title":"Export",
        "active":false
      }
    ];
    */

    return _sidebarMenuList;
  },

  activateSidebarMenu: function(id) {
    for (var idx in _sidebarMenuList) {
      if (idx == id) {
        _sidebarMenuList[idx]['active'] = true;
      } else {
        _sidebarMenuList[idx]['active'] = false;
      }
    }
  },
  findIdByHash: function(hash) {
    for (var id in _sidebarMenuList) {
      if (_sidebarMenuList[id]['hash'] == hash.replace("#", "")) {
        return id;
        break;
      }
    }
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case Constants.CLICK_SIDEBAR_MENU:
      Store.activateSidebarMenu(action.id);
      Store.emitChange();
      break;
    default:
    // no op
  }
});

module.exports = Store;
