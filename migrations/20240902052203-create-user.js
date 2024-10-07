"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNo: { 
        type: Sequelize.STRING 
      },
      otp: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.JSON
      },
      birthdate: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      document: {
        type: Sequelize.JSON  
      },
      address: {
        type: Sequelize.JSON,
      },
      gender: {
        type: Sequelize.STRING,
        enum: ["Man", "Woman", "Non-Binary"],
        defaultValue: "Man",
      },
      showGender: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      perfectMatch: {
        type: Sequelize.STRING,
        enum: ["Man", "Woman", "Non-Binary"],
        defaultValue: "Woman",
      },
      showPerfectMatch: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      ageRange: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      photos: {
        type: Sequelize.JSON,
      },
      bio: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      education: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      university: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      pushNotifications: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      interests: Sequelize.JSON,
      fbUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      instaUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      snapchatUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      spotifyUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      appleMusicUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      tiktokUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      AccountStatus: {
        type: Sequelize.STRING,
        enum: ["Active", "Inactive"],
        defaultValue: "Active",
      },
      deleteAccountFeedback: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      screenNo: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};