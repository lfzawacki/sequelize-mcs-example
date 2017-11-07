'use strict';
module.exports = (sequelize, DataTypes) => {
  var MediaServer = sequelize.define('MediaServer', {
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    external_ip: DataTypes.STRING,
    local_ip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MediaServer;
};