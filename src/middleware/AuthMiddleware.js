const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers["token-key"];
    const secretKey = "secret-123";

    if (!token) {
      res.status(401).json({
        status: "Failed",
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(token, secretKey)
    next()

    await jwt.verify(token, secretKey);
  } catch (error) {
    res.status(401).json({
        status: "Failed",
        message: "Invalid or Expired token",
      });
  }
};
