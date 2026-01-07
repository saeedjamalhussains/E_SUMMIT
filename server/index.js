require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/esummit')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  role: String,
  interestInECell: Boolean,
  date: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

app.post('/api/register', async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Interest already registered' });
    }

    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: 'Interest registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Interest registration failed' });
  }
});

app.get('/', (req, res) => {
  res.send('E-Summit API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
