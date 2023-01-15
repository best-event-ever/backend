import Event from "../../models/eventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find().select("-__v");
    res.status(200).send(allEvents);
  } catch (error) {
    console.log(error);
  }
};

// export const getOneEvent = async (req, res) => {
//   try {
//     const oneEvent = await Event.findById(req.params.id).// select('-__v');
//     res.status(200).json(oneEvent);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getOneEvent = async (req, res) => {
  const userEvent = [];
  try {
    const oneEvent = await Event.findById(req.params.id).select("-__v");
    res.status(200).json(oneEvent);
  } catch (error) {
    console.log(error);
  }
};
