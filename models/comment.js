module.exports = (Sequelize, DataTypes) => {
  const Comment = Sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      userId: { field: "user_id", type: DataTypes.INTEGER.UNSIGNED },
      postId: { field: "post_id", type: DataTypes.INTEGER.UNSIGNED },
      createdAt: { field: "created_at", type: DataTypes.DATE },
      updatedAt: { field: "updated_at", type: DataTypes.DATE }
    },
    {
      tableName: "comments",
      defaultScope: {
        limit: 10
      }
    }
  );

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE"
    });
  };
  Comment.associate = models => {
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
      as: "post",
      onDelete: "CASCADE"
    });
  };

  return Comment;
};
