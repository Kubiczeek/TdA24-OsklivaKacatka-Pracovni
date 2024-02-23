import nodemailer from 'nodemailer';
// Create a transporter using the Gmail service and authentication credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'teacherdigitalagencysystem@gmail.com',
      pass: 'dxci zthg vvpb voph',
    },
  });
  
// Export the transporter for use in other files
export default transporter;


//how to use 
/*
import transporter from '$lib/server/nodemailer/nodemailer.js';

// Define the email options, including sender, recipient, subject, text, and HTML content
const mailOptions = {
  from: 'teacherdigitalagencysystem@gmail.com',
  to: 'mikulic.tablet.kluci@gmail.com',
  subject: 'Hello ✔',
  text: 'Hello world?', // Plain text content
  html: '<b>Hello world?</b>', // HTML content
};

// Send the email using the transporter and specified mail options
transporter.sendMail(mailOptions, (error, info) => {
  // Check for errors during the email sending process
  if (error) {
    return console.error(error);
  }
  
  // If no errors, log the message ID indicating successful sending
  console.log('Message sent: %s', info.messageId);
});
  */