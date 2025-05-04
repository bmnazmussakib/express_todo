const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");

// Create
exports.CreateProfile = async (req, res) => {
  try {
    let reqBody = req.body;
    const data = await ProfileModel.create(reqBody);
    res.status(201).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: error,
    });
  }
};

// Read
exports.GetProfile = async (req, res) => {
  try {
    let Query = {};
    const data = await ProfileModel.find(Query);
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: error,
    });
  }
};

// Update
exports.UpdateProfile = async (req, res) => {
  try {
    let id = req.params.id;
    let Query = { _id: id };
    let reqBody = req.body;
    const data = await ProfileModel.findOneAndUpdate(Query, reqBody, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: error,
    });
  }
};

// Delete
exports.DeleteProfile = async (req, res) => {
  try {
    let id = req.params.id;
    let Query = { _id: id };
    const data = await ProfileModel.deleteOne(Query);
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      data: error,
    });
  }
};

// User Login
exports.UserLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await ProfileModel.findOne({ username, password });
  
      // ✅ If no matching user
      if (!user) {
        return res.status(401).json({
          status: "Unauthenticated",
          message: "Invalid username or password",
        });
      }


      if (user?.length > 0) {
        
          // ✅ Create token only if user is found
          const payload = {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user,
          };
      
          const secretKey = "secret-123";
          const token = jwt.sign(payload, secretKey);
      
          res.status(200).json({
            status: "success",
            token: token,
            data: user,
          });
      }
  
  
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Server error",
        error: error.message,
      });
    }
};


//   Select Profile
exports.SelectProfile = async (req, res) => {
    try {
        const username = ""
        const Query = {}
        const user = await ProfileModel.find(Query)
        res.status(201).json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: error,
          });
    }
}
  