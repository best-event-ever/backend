import User from "../models/userModel.js";
import Veranstalter from "../models/veranstalterModel.js";

const userAdm = async (req, res, next) => {
  try {
    const user = await User.findById(req.token.userId);
    if (!user.isAdmin) {
      const error = new Error("No User");
      error.statusCode = 401;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

const veranstalterAdm = async (req, res, next) => {
  try {
    const user = await Veranstalter.findById(req.token.userId);
    if (!user.isAdmin) {
      const error = new Error("No User");
      error.statusCode = 401;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default { userAdm, veranstalterAdm };
