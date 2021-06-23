import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GitCard extends Component {
    render() {
        const { gitInfo } = this.props
        return (
            <div className="card">
              <div className="card-header">
                  <h1 className="card-header-title">{ gitInfo.name }</h1>
                  <p className="card-header-subtitle">{ gitInfo.login }</p>
                  <img src={ gitInfo.avatar_url } className="card-header-icon gitImg" alt={ `Imagem de ${gitInfo.name}` } />
              </div>
              <p  className="card-content" >{ gitInfo.bio }</p>
              <div className="card-footer">
                <a href={ gitInfo.html_url } target="_blank" rel="noreferrer" className="card-footer-item">
                    Perfil
                </a>
              </div>
          </div>
        );
    }
}

GitCard.propTypes = {
  gitInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GitCard;