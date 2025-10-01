const userModel = require("../models/User");
const jwt = require("jsonwebtoken");          

// Auth Middleware
async function auth(req, res, next) {
  try {
    const token = req.cookies.token; 

    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }

    // verify token
    const vToken = jwt.verify(token, process.env.JWT_SECRETKEY);

    if (!vToken) {
      return res.status(400).json({ message: "Token is invalid" });
    }

    // find user
    const user = await userModel.findById(vToken.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    req.user = user; 
    next();
  } catch (error) {
    res.status(500).json({ message: "Auth error", error: error.message });
  }
}

// Admin Middleware
function checkAdmin(req, res, next) {
  if (req.user && req.user.Rol === "Admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied. Admin only" });
  }
}

module.exports = { auth, checkAdmin }; 


