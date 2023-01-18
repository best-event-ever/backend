import Event from "../../models/eventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find().select("-__v");
    res.status(200).send(allEvents);
  } catch (error) {
    console.log(error);
  }
};