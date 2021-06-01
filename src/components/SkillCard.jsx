import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillCard extends Component {
    render() {
        const { skill } = this.props
        return (<li><img src={skill.icon} alt={`Icone de ${skill.name}`}/>{`${skill.name} - ${skill.level}`} </li>);
    }
}

SkillCard.propTypes = {

};

export default SkillCard;