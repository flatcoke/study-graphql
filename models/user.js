module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(30),
        unique: {
          args: true,
          msg: "The username is already in use"
        },
        validate: {
          is: /^[a-z0-9\_\-]+$/i,
          notEmpty: { msg: "Username can not be null" }
        }
      },
      createdAt: { field: "created_at", type: DataTypes.DATE },
      updatedAt: { field: "updated_at", type: DataTypes.DATE }
    },
    {
      tableName: "users",
      timestamps: true,
      defaultScope: {
        attributes: ["id", "username", "createdAt", "updatedAt"],
        limit: 10,
        order: [["id", "DESC"]]
      }
    }
  );

  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "posts",
      onDelete: "CASCADE"
    });

    User.hasMany(models.Comment, {
      foreignKey: "userId",
      as: "comments",
      onDelete: "CASCADE"
    });
  };

  return User;
};
