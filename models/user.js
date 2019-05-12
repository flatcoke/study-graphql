module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: { field: "created_at", type: DataTypes.DATE },
      updatedAt: { field: "updated_at", type: DataTypes.DATE }
    },
    {
      tableName: "users",
      defaultScope: {
        attributes: ["id", "createdAt", "updatedAt"]
      }
    }
  );

  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "posts",
      onDelete: "CASCADE"
    });
  };

  return User;
};
