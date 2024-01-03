// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:3000', 'https://my-profolio-4161.web.app'];
app.use(cors({
  origin: allowedOrigins,
  methods: ["POST", "GET"],
  credentials: true,
}));


// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB!")).catch(error => console.error(error));

// Create a new custom schema type for storing formatted date and time
const FormattedDateType = {
  type: String,
  set: function (value) {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata', // Set the time zone to your local time zone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    }).format(new Date(value));
    return formattedDate;
  },
};




// Create a MongoDB schema and model for the form submissions
const submissionSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  email: String,
  subject: String,
  message: String,
  dateTime: FormattedDateType, // Add the dateTime field with default value as current date and time
}, {
  collection: 'responses' // Specify the custom collection name here
});






const Submission = mongoose.model('Submission', submissionSchema, 'responses'); // Specify the custom database name here

// API endpoint to receive form submissions via POST request
app.post('/response', async (req, res) => {
  try {
    const { username, phoneNumber, email, subject, message, dateTime } = req.body;

  

    // Save the form data to the MongoDB database
    const submission = new Submission({
      username,
      phoneNumber,
      email,
      subject,
      message,
      dateTime: new Date().toISOString() , // Include the date and time in the form submission
    });
    await submission.save();

    return res.status(200).json({ message: 'Response saved successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while saving the response!' });
  }
});

// API endpoint to fetch responses
app.get('/response', async (req, res) => {
  try {
    // Retrieve all form submissions from the MongoDB database
    const responses = await Submission.find({});

    return res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error reading responses.' });
  }
});

// API endpoint to delete a response
app.post('/deleteResponse', async (req, res) => {
  try {
    const { index } = req.body;

    // Retrieve all form submissions from the MongoDB database
    const responses = await Submission.find({});

    // Check if the index is valid
    if (index >= 0 && index < responses.length) {
      const responseToDelete = responses[index];

      // Use findOneAndDelete to find and remove the specific document
      await Submission.findOneAndDelete({ _id: responseToDelete._id });

      return res.status(200).json({ message: 'Response deleted successfully.' });
    } else {
      return res.status(400).json({ message: 'Invalid index provided.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while deleting response.' });
  }
});

// API endpoint to delete a response from the MongoDB database
app.post('/deleteResponseFromDatabase', async (req, res) => {
  try {
    const { id } = req.body;

    // Check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid response ID provided.' });
    }

    // Delete the response from the database
    await Submission.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Response deleted from the database successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while deleting response from the database.' });
  }
});








// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
