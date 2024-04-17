import React, { useState } from 'react';
import axios from 'axios';
import Repoinfo from '../Pages/Repoinfo';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${username}/repos`,
        {
          headers: {
            'X-Github-Api-Version': '2022-11-28',
            'Authorization': 'Bearer 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'
          }
        });
      setRepositories(response.data || []);
      console.log(response.data);
      setLoading(false);
      // Initialize as empty array if undefined
    } catch (error) {
      console.error('Error searching for user:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div></div>
    )
  }

  return (
    <div style={{backgroundImage:`url(https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg)`}}>
    <div>
      <h1 style={{font:'blue'}}>Github Analysis System</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {
        loading &&
        <p>Loading Data</p>
      }
      <br />
      <br />

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
          {repositories.map((repo) => (
            <div key={repo.id} style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <div style={{ width: '50%' }}>
                <table class="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col" colSpan={2}>{repo.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">Forks Count:</td>
                      <td>{repo.forks_count}</td>
                    </tr>
                    <tr>
                      <td scope="row">Open issue:</td>
                      <td>{repo.open_issues}</td>
                    </tr>
                    <tr>
                      <td scope="row">Commits:</td>
                      <td>{repo.commits_url}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ width: '100%' ,backgroundColor:'black'}}>
                <Repoinfo repoId={repo.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSearch;