import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillCard from './SkillCard';

class ProglList extends Component {
    render() {
        const { progl } = this.props;
        return (progl
            .map((skill) => <SkillCard className="prog-card" key={ skill.name } skill={skill}/>))
    }
}

ProglList.propTypes = {

};

export default ProglList;