import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <button type="button" onClick={handleSignOut}>
              Sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
