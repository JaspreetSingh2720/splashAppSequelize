const JWT = require("jsonwebtoken");
const response = require("../helpers/apiResponse");
const msgs = require("../helpers/messages");
const { User } = require("../models");
const { generateOtp } = require("../utils/otpGenerate");
const { Op } = require("sequelize");

const signupController = async (req, res) => {
  try {
    const { email, phoneNo, screenNo } = req.body;
    if (!email && !phoneNo) {
      return response.badRequestResponse(
        res,
        "Please provide email or password"
      );
    }
    let checkUser;
    if (email) {
      console.log(email);
      checkUser = await User.findAll({
        where: {
          email: email,
        },
      });
    } else {
      console.log(phoneNo);

      checkUser = await User.findAll({
        where: {
          phoneNo: phoneNo,
        },
      });
    }
    console.log(checkUser);
    if (checkUser.length) {
      return response.badRequestResponse(
        res,
        msgs.badRequestResponse.USER_ALREADY_EXISTS
      );
    }
    const user = await User.create({
      email: email,
      phoneNo: phoneNo,
      screenNo: screenNo,
    });

    const otp = await User.update(
      { otp: generateOtp() },
      { where: { id: user.id } }
    );
    return response.okResponseWithData(
      res,
      msgs.okResponses.OTP_GENERATED,
      user.otp
    );
  } catch (error) {
    return response.internalServerErrorResponse(
      res,
      error.message,
      msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR
    );
  }
};

const otpVerifyController = async (req, res) => {
  try {
    const { email, phoneNo, otp } = req.body;
    const user = await User.findAll({
      where: {
        [Op.or]: [{ email: email }, { phoneNo: phoneNo }],
        otp: otp,
      },
    });
    if (!user) {
      return response.notFoundResponse(res, msgs.notFoundResponse.INVALID_OTP);
    }
    const token = JWT.sign(
      { id: user.id, email: email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    return response.okResponse(res, msgs.okResponses.TOKEN_GENERATED, token);
  } catch (error) {
    return response.internalServerErrorResponse(
      res,
      error.message,
      msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR
    );
  }
};

const loginController = async (req, res) => {
  try {
    const { email, phoneNo } = req.body;
    if (!email && !phoneNo) {
      return response.badRequestResponse(
        res,
        msgs.badRequestResponse.PROVIDE_EMAIL_OR_PASSWORD
      );
    }
    let user;
    if (email) {
      user = await User.findOne({
        where: { email: email },
      });
    }
    if (phoneNo) {
      user = await User.findOne({
        where: { phoneNo: phoneNo },
      });
    }

    if (!user) {
      return response.notFoundResponse(res, msgs.notFoundResponse.NOT_FOUND);
    }
    await User.update(
      { otp: generateOtp() },
      {
        where: {
          id: user.id,
        },
      }
    );
    return response.okResponseWithData(res, msgs.okResponses.OTP_GENERATED);
  } catch (error) {
    return response.internalServerErrorResponse(
      res,
      error.message,
      msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR
    );
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await User.findByPk({id: req.user.id});
    if(!user){
      return response.notFoundResponse(res, msgs.notFoundResponse.NOT_FOUND);
    }
    const {
      email,
      phoneNo,
      longitude,
      latitude,
      firstname,
      lastname,
      birthdate,
      address,
      gender,
      showGender,
      perfectMatch,
      showPerfectMatch,
      ageRange,
      bio,
      education,
      university,
      pushNotifications,
      interests,
      fbUrl,
      instaUrl,
      snapchatUrl,
      spotifyUrl,
      appleMusicUrl,
      tiktokUrl,
      screenNo,
    } = req.body;

    const updatedUser = await User.update({})

  } catch (error) {
    return response.internalServerErrorResponse(
      res,
      error.message,
      msgs.internalServerErrorResponses.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  signupController,
  otpVerifyController,
  loginController,
};
