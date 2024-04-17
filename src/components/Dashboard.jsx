
import React from 'react';
import UserSearch from './UserSearch';
import RepositoryList from './RepositoryList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard-container">
      <h1 className="text-center mb-4">GitHub Analytics Dashboard</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">Search GitHub User</div>
            <div className="card-body">
              <a href="/searchuser">Search User</a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">User Repositories</div>
            <div className="card-body">
              {/* <RepositoryList /> */}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">Repository Chart</div>
            <div className="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
