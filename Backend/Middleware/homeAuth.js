const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.KEY_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({ message: "Auth failed", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .send({ message: `Authorization Error`, success: false, error });
  }
};
