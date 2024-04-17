// src/components/RepositoryList.js

import React from 'react';

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo._id}>
            <strong>{repo.name}</strong>
            <p>Stars: {repo.stars}</p>
            <p>Forks: {repo.forks}</p>
            <p>Open Issues: {repo.openIssues}</p>
            <h4>Recent Commits:</h4>
            <ul>
              {repo.recentCommits.map((commit, index) => (
                <li key={index}>{commit}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;