const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers["token-key"];
    const secretKey = "secret-123";

    if (!token) {
      return res.status(401).json({
        status: "Failed",
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(token, secretKey);
    const username = decoded.data.username;
    req.headers.username = username;
    next();

  } catch (error) {
    return res.status(401).json({
      status: "Failed",
      message: "Invalid or Expired token",
    });
  }
};
