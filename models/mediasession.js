'use strict';
module.exports = (sequelize, DataTypes) => {
  var MediaSession = sequelize.define('MediaSession', {
    user_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MediaSession;
};