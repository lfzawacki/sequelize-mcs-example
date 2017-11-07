'use strict';
module.exports = (sequelize, DataTypes) => {
  var MediaElement = sequelize.define('MediaElement', {
    media_session_id: DataTypes.INTEGER,
    media_server_id: DataTypes.INTEGER,
    media_descriptor: DataTypes.STRING,
    constraints: DataTypes.STRING,
    media_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MediaElement;
};