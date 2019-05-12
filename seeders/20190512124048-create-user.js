"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Adam_OKon65"
        },
        {
          username: "Albertha.Hegmann6"
        },
        {
          username: "Ayla38"
        },
        {
          username: "Clay.Ritchie"
        },
        {
          username: "Dorthy.Bashirian"
        },
        {
          username: "Fannie.Waelchi"
        },
        {
          username: "Henry.Bins19"
        },
        {
          username: "Jeramy.Dooley"
        },
        {
          username: "Kelsie64"
        },
        {
          username: "Monserrate_Grady56"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("User", null, {});
  }
};
