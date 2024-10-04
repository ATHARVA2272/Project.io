import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";

const secureRoute = async (req, res, next) => {
  try {
    console.log(req.cookies); // Debugging to see if cookies are correctly parsed
    
    const token = req.cookies.jwt;
    console.log("Token from cookies:", token); // Debugging token output
    
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Find the user by decoded userId in the token
    const user = await User.findById(decoded.userId).select("-password"); // Exclude password field
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach user object to the req for future route handlers
    req.user = user;
    next();
    
  } catch (error) {
    console.error("Error in secureRoute:", error);

    // Handling specific JWT errors (optional)
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Catch-all error handler
    res.status(500).json({ error: "Internal server error" });
  }
};

export default secureRoute;
