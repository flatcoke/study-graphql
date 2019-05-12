"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id"
        }
      },
      postId: {
        field: "post_id",
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        onDelete: "CASCADE",
        references: {
          model: "posts",
          key: "id"
        }
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comments");
  }
};
