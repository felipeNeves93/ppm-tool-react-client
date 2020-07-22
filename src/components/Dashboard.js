import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';

class Dashboard extends Component {
    render() {
        return (
            // React components should have only one parent div
            <div>
                <h1 className="alert alert-warning">Welcome to the Dashboard</h1>
                {/* Importing external ProjectItem component here */}
                <ProjectItem />
            </div>
        )
    }
}

export default Dashboard;
