import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('*O e-mail inserido não é válido')
    .required('*O e-mail é obrigatório'),
  password: Yup.string().required('*A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fastfeet logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>Seu e-mail</strong>
        <Input type="email" name="email" placeholder="exemplo@email.com" />
        <strong>Sua senha</strong>
        <Input type="password" name="password" placeholder="******" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
