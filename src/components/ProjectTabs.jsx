import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectTabs extends Component {
    render() {
        const { handler } = this.props;
        return (
            <div className="tabs is-centered">
            <ul>
                <li onClick={ handler } query=''  className="is-active">Todos</li>
                <li onClick={ handler } query='fp' >Fundamentos da programação Web</li>
                <li onClick={ handler } query='df' >Desenvolvimento FrontEnd</li>
                <li onClick={ handler } query='db' >Desenvolvimento BackEnd</li>
            </ul>
         </div>
        );
    }
}

ProjectTabs.propTypes = {
  props: PropTypes.shape({
      handler: PropTypes.func
  }).isRequired,
};

export default ProjectTabs;