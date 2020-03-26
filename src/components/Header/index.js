import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet logo" />
          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliverers">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <strong>Distribuidora Fastfeet</strong>
            <a href="#">Sair do sistema</a>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
