var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all("Burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("Burger", ["burger_name", "devour"], [name, false], function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("Burger", {devour: true}, condition, function(res) {
      cb(res);
    });

  },
}

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
