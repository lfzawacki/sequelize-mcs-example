'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MediaElements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      media_session_id: {
        type: Sequelize.INTEGER
      },
      media_server_id: {
        type: Sequelize.INTEGER
      },
      media_descriptor: {
        type: Sequelize.STRING
      },
      constraints: {
        type: Sequelize.STRING
      },
      media_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MediaElements');
  }
};