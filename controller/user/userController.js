import Event from "../../models/eventModel.js";
const userEvent = [];

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
