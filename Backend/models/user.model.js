import mongoose from 'mongoose';


// User Schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, // URL to the profile picture
  },
  bio: {
    type: String,
  },
  skills: {
    type: [String], // Array of skills
  },
  experienceLevel: {
    type: String, // Entry-level, Mid-level, Senior
    required: true,
  },
  availability: {
    type: Boolean, // True if the user is available for new projects
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});



const User = mongoose.model('User', userSchema);
export default User;
