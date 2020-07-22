import React, { Component } from 'react'
import ProjectItem from './project/ProjectItem';

class Dashboard extends Component {
    render() {
        return (
            // React components should have only one parent div
            <div>
                <h1>Welcome to the Dashboard</h1>
                {/* Importing external ProjectItem component here */}
                <ProjectItem />
            </div>
        )
    }
}

export default Dashboard;
