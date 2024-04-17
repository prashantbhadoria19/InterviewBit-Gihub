const mongoose = require('mongoose');

const repositorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  stars: { type: Number, default: 0 },
  forks: { type: Number, default: 0 },
  openIssues: { type: Number, default: 0 },
  recentCommits: [{ type: String }],
});

const Repository = mongoose.model('Repository', repositorySchema);

module.exports = Repository;
