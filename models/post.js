module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      userId: { field: "user_id", type: DataTypes.INTEGER.UNSIGNED },
      createdAt: { field: "created_at", type: DataTypes.DATE },
      updatedAt: { field: "updated_at", type: DataTypes.DATE }
    },
    {
      tableName: "posts",
      defaultScope: {
        limit: 10,
        order: [['createdAt', 'desc']]
      }
    }
  );

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE"
    });
    Post.hasMany(models.Comment, {
      foreignKey: "postId",
      as: "comments",
      onDelete: "CASCADE"
    });
  };

  return Post;
};
