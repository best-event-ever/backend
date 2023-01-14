import Event from '../../models/eventModel.js';

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
    const allEvents = await Event.find().select('-__v');
    res.status(200).send(allEvents);
  } catch (error) {
    console.log(error);
  }
};

export const getOneEvent = async (req, res) => {
  try {
    const oneEvent = await Event.findById(req.params.id).select('-__v');
    res.status(200).json(oneEvent);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneEvent = async (req, res) => {
  try {
    const deleteOneEvent = await Event.deleteOne(req.body);
    res.status(200).json(deleteOneEvent);
  } catch (error) {
    console.log(error);
  }
};