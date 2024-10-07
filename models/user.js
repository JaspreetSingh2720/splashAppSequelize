"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
      otp: DataTypes.STRING,
      location: {
        type: DataTypes.JSON,
        defaultValue: {
          type: "Point",
          coordinates: [],
        },
      },
      birthdate: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      document: {
        type: DataTypes.JSON,
        defaultValue: {
          documentType: "",
          frontSide: "",
          backSide: "",
        },
      },
      address: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {
          country: "",
          state: "",
          city: "",
        },
      },
      gender: {
        type: DataTypes.ENUM("Man", "Woman", "Non-Binary"),
        defaultValue: "Man",
      },
      showGender: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      perfectMatch: {
        type: DataTypes.ENUM("Man", "Woman", "Non-Binary"),
        defaultValue: "Woman",
      },
      showPerfectMatch: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      ageRange: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      photos: {
        type: DataTypes.JSON,
        defaultValue: [],
      },
      bio: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      education: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      university: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      pushNotifications: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      interests: { type: DataTypes.JSON, defaultValue: [] },
      fbUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      instaUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      snapchatUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      spotifyUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      appleMusicUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      tiktokUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      AccountStatus: {
        type: DataTypes.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      deleteAccountFeedback: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      screenNo: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
