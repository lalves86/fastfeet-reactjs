import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/fastfeet-logo.png';
// import { Container } from './styles';

export default function signIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Fastfeet logo" />

      <Form onSubmit={handleSubmit}>
        <span>Seu e-mail</span>
        <Input type="email" name="email" placeholder="exemplo@email.com" />
        <span>Sua senha</span>
        <Input type="password" name="password" placeholder="******" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
