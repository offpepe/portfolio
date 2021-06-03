import React, { Component } from 'react';
import ProjectTabs from '../components/ProjectTabs';
import ProjectList from '../components/ProjectList';
import { projects } from '../services/data';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    queryChangeHandler = (e) => {
      let { query } = this.state;
      query = (Object.entries(e.target)[1].pop().query);
      this.setState({ query });
    }

    render() {
        return (
            <main>
                <ProjectTabs handler={ this.queryChangeHandler } projects={ projects }/>
                <ProjectList className="project-list" projects={ projects } />
            </main>
        );
    }
}

export default Projects;