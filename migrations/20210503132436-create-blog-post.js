'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'id'
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};