// index.js

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const User = require('./models/User');
const Repository = require('./models/Repository');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
// Example route to fetch GitHub user repositories
app.get('/api/repositories/:username', async (req, res) => {
  const { username } = req.params;
  try {
    // Fetch user repositories from GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repositories = response.data;

    // Save repositories to the database
    const savedRepositories = await Promise.all(
      repositories.map(async (repo) => {
        const savedRepo = await Repository.findOneAndUpdate(
          { name: repo.name },
          repo,
          { upsert: true, new: true }
        );
        return savedRepo._id;
      })
    );

    // Find or create the user and update their repositories
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username, repositories: savedRepositories });
    } else {
      user.repositories = savedRepositories;
    }
    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    res.status(500).json({ error: 'Failed to fetch user repositories' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
