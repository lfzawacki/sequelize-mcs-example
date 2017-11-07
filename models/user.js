'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    room_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};