import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectTabs extends Component {
    constructor() {
      super();
      this.state = {
          elements: [
            { 
              id:1,
              state: 'is-active'
            },
            {
              id: 2,
              state: 'is-desactive',
            },
            {
              id: 3,
              state: 'is-desactive',
            },
            {
              id: 4,
              state: 'is-desactive',
            },
          ],
      }
    }
    handleClick = (e) => {
      const { handler } = this.props;
      const { elements } = this.state;
      const elId = (Object.entries(e.target).pop().pop().id);
      const elIndex = elements.indexOf(elements.filter((el) => el.id === elId).shift());
      const lastActiveIndex = elements.indexOf(elements.filter((el) => el.state === 'is-active').shift()); 
      if(elIndex !== lastActiveIndex){
        elements[elIndex].state = 'is-active';
        if(lastActiveIndex !== undefined){
            elements[lastActiveIndex].state = 'is-desactive';
          }
      }
      handler(e.target);
    }

    render() {
        const { elements } = this.state;
        return (
            <div className="tabs is-centered">
            <ul>
                <li onClick={ this.handleClick }  id={ elements[0].id } query=''  className={ elements[0].state}>Todos</li>
                <li onClick={ this.handleClick }  id={ elements[1].id } query='fp'className={ elements[1].state} >Fundamentos da programação Web</li>
                <li onClick={ this.handleClick }  id={ elements[2].id } query='df'className={ elements[2].state} >Desenvolvimento FrontEnd</li>
                <li onClick={ this.handleClick }  id={ elements[3].id } query='db'className={ elements[3].state} >Desenvolvimento BackEnd</li>
            </ul>
         </div>
        );
    }
}

ProjectTabs.propTypes = {
    handler: PropTypes.func.isRequired,
};

export default ProjectTabs;