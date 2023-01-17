import Organizer from "../../models/organizerModel.js";

export const tokenController = async (req, res) => {
  try {
    const { email = "", password } = req.body;
    const organizer = await Organizer.findOne({ wherw: { email } });
    if (email && password) {
      res.send("ok");
    }
    if (organizer) {
      res.send("ok");
    }
  } catch (error) {
    res.status(400).json(
      json({
        errors: ["E-Mail oder Passwort ist nicht vorhanden"],
      })
    );
  }
};
