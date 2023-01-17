import Event from "../../models/eventModel.js";
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userEvent = [];

export const addUser = async (req, res) => {
  try {
    const newUser = req.body;
    console.log("new User", newUser);
    const existedUser = await User.findOne({
      email: newUser.email,
    });
    if (existedUser) {
      const error = new Error(
        "Es gibt einen User:innen mit der e-Mail Adresse"
      );
      error.statusCode = 400;
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const createdUser = await User.create({
      ...newUser,
      password: hashedPassword,
    });
    res.status(200).send(createdUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.find().select("-__v");
    if (allEvents === userEvent) {
      res.status(200).json(userEvent);
    }
    res.status(200).send(userEvent);
  } catch (error) {
    console.log(error);
  }
};

export const getOneEvent = async (req, res) => {
  try {
    const oneEvent = await Event.findById(req.params.id).select("-__v");
    userEvent.push(oneEvent);
    res.status(200).json(oneEvent);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const userData = req.body;
    const JWT_KEY = process.env.JWT || "Standartwert";
    const userDB = await User.findOne({
      email: userData.email,
    });
    console.log(userDB);
    if (!userDB) {
      {
        res.status(401).json({
          errors: ["Falsches Email Adresse"],
        });
      }
    }

    const checkPassword = await bcrypt.compare(
      userData.password,
      userDB.password
    );
    if (!checkPassword) {
      res.status(401).json({
        errors: ["Falsches Password adresse"],
      });
    }
    const token = jwt.sign(
      {
        email: userDB.email,
        userId: userDB._id,
      },
      JWT_KEY,
      { expiresIn: "1h" }
    );
    res.send({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
