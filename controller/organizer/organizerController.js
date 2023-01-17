import Event from "../../models/eventModel.js";
import Organizer from "../../models/organizerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getOrganizer = async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.send(organizers);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addOrganizer = async (req, res) => {
  try {
    const newOrganizer = req.body;
    console.log("new Organizer", newOrganizer);
    const existedOrganizer = await Organizer.findOne({
      email: newOrganizer.email,
    });
    if (existedOrganizer) {
      const error = new Error(
        "Es gibt einen Veranstalter:innen mit der e-Mail Adresse"
      );
      error.statusCode = 400;
    }

    const hashedPassword = await bcrypt.hash(newOrganizer.password, 10);
    const createdOrganizer = await Organizer.create({
      ...newOrganizer,
      password: hashedPassword,
    });
    res.status(200).send(createdOrganizer);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const postOneEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find().select("-__v");
    res.status(200).send(allEvents);
  } catch (error) {
    console.log(error);
  }
};

export const getOneEventById = async (req, res) => {
  try {
    const oneEvent = await Event.findById(req.params.id).select("-__v");
    res.status(200).json(oneEvent);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteOneEventById = async (req, res) => {
  try {
    const deleteOneEvent = await Event.deleteOne(req.body);
    res.status(200).json(deleteOneEvent);
  } catch (error) {
    console.log(error);
  }
};

export const updateOneEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOneEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    }).select("-__v");
    res.status(200).json(updateOneEvent);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const organizerData = req.body;
    const JWT_KEY = process.env.JWT || "Standartwert";
    const organizerDB = await Organizer.findOne({
      email: organizerData.email,
    });
    if (!organizerDB) {
      {
        res.status(401).json({
          errors: ["Falsches Email Adresse"],
        });
      }
    }

    const checkPassword = await bcrypt.compare(
      organizerData.password,
      organizerDB.password
    );
    if (!checkPassword) {
      res.status(401).json({
        errors: ["Falsches Password adresse"],
      });
    }
    const token = jwt.sign(
      {
        email: organizerDB.email,
        userId: organizerDB._id,
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
