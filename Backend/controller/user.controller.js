import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generatetoken.js";

export const signup = async (req, res) => {
  const { fullName, username, email, password, bio, skills, experienceLevel, availability } = req.body;
  
  try {
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already registered" });
    }

    // Validate password
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

   
    // Log the password to ensure it's not undefined
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashPassword,
      bio,
      skills,
      experienceLevel,
      availability,
    });

    // Save the user to the database
    await newUser.save();

    // Create token and save cookie
    createTokenAndSaveCookie(newUser._id, res);

    // Respond with the newly created user
    res.status(201).json({
      message: "User created successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.error(error);  // Use console.error for error logging
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    
    // Check if user exists
    if (!user) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }
    
    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    
    // If password doesn't match, return an error
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }

    // Create a JWT token and save it in the response cookie
    const token = createTokenAndSaveCookie(user._id, res);

    // Respond with a success message, the token, and user ID
    res.status(200).json({
      message: "User logged in successfully",
      token: token, // Return the token for client-side use
      userId: user._id, // Send the userId along with the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const logout = (req, res) => {
  try {
    // Clear the 'jwt' cookie
    res.clearCookie('jwt'); // Correct method to clear the cookie
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const allUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(201).json(filteredUsers);
  } catch (error) {
    console.log("Error in allUsers Controller: " + error);
  }
};

export const getUserById = async (req, res) => {
  try {
    // Find the user by the ID extracted from the token
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  // try {
  //   const loggedInUser = req.user._id;
  //   const filteredUsers = await User.find({
  //     _id: { $ne: loggedInUser },
  //   }).select("-password");
  //   res.status(201).json(filteredUsers);
  // } catch (error) {
  //   console.log("Error in allUsers Controller: " + error);
  // }
};


export const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find(); // Optionally, you can use .populate() if you need to fetch related data

    // Check if users exist
    if (!users || users.length === 0) {
      return res.status(404).json({ error: 'No users found' });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};