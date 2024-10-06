import nodemailer from 'nodemailer';
import User from '../models/user.model.js';

// Email sending function
export const sendEmail = async (req, res) => {
  const { leaderEmail, subject, message, userId } = req.body;

  try {
    // Fetch user information using the userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const userEmail = user.email; // Get the user's email
    console.log(userEmail);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use true for 465
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail address
          pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
        },
      });

    // Email options
    const mailOptions = {
      from: userEmail, // Use user's email as the sender
      to: leaderEmail, // Send email to the project leader
      subject: subject,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

