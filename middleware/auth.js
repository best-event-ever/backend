import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT || "Standardwert");
    console.log(decodedToken);
    req.token = decodedToken;
    next();
  } catch (error) {
    const errObj = new Error("Not authorized", { cause: error });
    errObj.statusCode = 401;
    next(errObj);
  }
};

export default auth;
