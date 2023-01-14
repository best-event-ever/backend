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

export const getOneEventById = async (req, res) => {
  try {
    const oneEvent = await Event.findById(req.params.id).select('-__v');
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
    const updateOneEvent = await Event.findByIdAndUpdate(id, req.body, {new: true}).select('-__v');
    res.status(200).json(updateOneEvent);
  } catch (error) {
    console.log(error);
  }
};