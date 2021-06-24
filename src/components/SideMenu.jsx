import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        return (
            <aside className="menu">
      <p className="menu-label">
        Ordem
      </p>
      <ul className="menu-list">
        <li><p>Por data</p>
          <ul>
            <li><p>Crescente</p></li>
            <li><p>Decrescente</p></li>
          </ul>
        </li>
      </ul>
      <p className="menu-label">
        Tipo
      </p>
      <ul className="menu-list">
        <li><p> Individual </p></li>
        <li><p> Em Grupo </p></li>
        <li><p> Ambos </p></li>
      </ul>
    </aside>
        );
    }
}

export default SideMenu;