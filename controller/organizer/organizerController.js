import Event from "../../models/eventModel.js";
import Organizer from "../../models/organizerModel.js";
import bcrypt from "bcrypt";

export const getOrganizer = async (req, res, next) => {
  try {
    const organizers = await Organizer.find();
    res.send(organizers);
  } catch (error) {
    next(error);
  }
};

export const addOrganizer = async (req, res, next) => {
  try {
    const newOrganizer = req.body;
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
    res.status.send(createdOrganizer);
  } catch (error) {
    next(error);
  }
};

export const postOneEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json(newEvent);
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
