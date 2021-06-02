import React, { Component } from 'react';
import ProjectTabs from '../components/ProjectTabs';

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
                <ProjectTabs handler={ this.queryChangeHandler }/>
            </main>
        );
    }
}

export default Projects;