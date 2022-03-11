const db = require("../models");

const uuid = require("uuid");
const path = require("path");

const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const generateAccessToken = (user) => {
  const payload = {
    user,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class UserController {

  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ status: false, message: "Validation failed", ...errors });
      }
      const { email, password, name, role, img } = req.body;
      const candidate = await db.User.findOne({ where: { email: email } });
      if (candidate) {
        return res.status(400).json({
          status: false,
          message: "Email alredy exist",
        });
      }
      const hash = await bcrypt.hash(password, saltRounds);
      const user = await db.User.create({
        name,
        email,
        password: hash,
        img,
        role,
      });
      const responseUser = await db.User.findOne({
        where: { email: email },
        raw: true,
      });

      delete responseUser.password;

      const token = generateAccessToken(responseUser);
      return res.json({
        status: true,
        token,

        message: `User with ${email} successfully registered`,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ status: false, message: "Registration error" });
    }
  }


  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await db.User.findOne({
        where: { email: email },
        raw: true,
      });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: `User with Email: ${email} not found`,
        });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ status: false, message: `Password is incorrect` });
      }
      delete user.password;
      const token = generateAccessToken(user);

      return res.json({
        status: true,
        token,
        message: `Login successful`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await db.User.findAll({
        include: ["rating"],

      });
      const responseUsers = users.map((user) => {
        delete user.password;
        return user;
      });

      return res.json({
        status: true,
        users: responseUsers,
        message: `Users retrieved successfully`,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: false, message: `Can not get users` });
    }
  }

  async check(req, res, next) {

    const token = generateAccessToken(req.user);
    return res.json({
      status: true,
      token,

      message: `Token successfully refreshed`,
    });
  }


  async updateUser(req, res) {
    try {

      let img = "";
      const { file } = req.files;
      console.log("Update file:", file);
      let fileName = "user_avatar_" + uuid.v4() + ".jpg";
      file.mv(path.resolve(__dirname, "..", "static", fileName));


      const { id, email } = req.user;
      console.log(id, email);


      const { name } = req.body;

      console.log(req.body);
      const user = await db.User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(400).json({
          status: false,
          message: `Can not get user with email:${email}`,
        });
      }

      console.log(img);
      const status = await db.User.update(
        {
          name,
          img: fileName,
        },
        { where: { email: email } }
      );

      const updatedUser = await db.User.findOne({ where: { email: email } });
      delete updatedUser.password;

      const token = generateAccessToken(updatedUser);
      return res.json({
        status: true,
        user: updatedUser,
        token,
        message: `Data of user with id:${id} successfully updated. Token successfully refreshed`,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: `Can not change data of user with id:${id}`,
      });
    }
  }


  async updatePassword(req, res) {
    try {
      const { id, email } = req.user;
      console.log("Change pasword for:", id, email);

      const { oldPassword, newPassword } = req.body;
      console.log("req.body:", req.body);
      if (typeof id !== "number") {
        return res.status(400).json({ status: false, message: `Incorrect id` });
      }

      const user = await db.User.findOne({ where: { email: email } });
      if (!user) {
        return res
          .status(400)
          .json({ status: false, message: `Can not get user with id:${id}` });
      }
      const validPassword = await bcrypt.compare(oldPassword, user.password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ status: false, message: `Password is incorrect` });
      }
      const hash = await bcrypt.hash(newPassword, saltRounds);

      const status = await db.User.update(
        {
          password: hash,
        },
        { where: { email: email } }
      );
      const updatedUser = await db.User.findOne({ where: { email: email } });
      delete updatedUser.password;
      const token = generateAccessToken(updatedUser);
      return res.json({
        status: true,
        user: updatedUser,
        token,
        message: `Password for user with id:${id} successfully updated. Token successfully refreshed`,
      });
    } catch (error) {

      return res.status(400).json({
        status: false,
        message: `Can not change data of user`,
      });
    }
  }
}

module.exports = new UserController();
