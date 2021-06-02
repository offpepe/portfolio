import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillCard extends Component {
    render() {
        const { skill } = this.props
        return (<li className="prog-item">
               <img className="prog-card-img" src={skill.icon} alt={`Icone de ${skill.name}`}/>
               <p>{skill.name}</p>
               <p>{skill.level}</p>
            </li>);
    }
}

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default SkillCard;