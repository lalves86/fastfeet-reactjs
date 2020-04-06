import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import {
  Container,
  AddButton,
  BackButton,
  FormHeader,
  FormWrapper,
  AvatarInput,
} from './styles';

export default function NewDeliverer({ match }) {
  const [newDeliverer, setNewDeliverer] = useState([]);
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const [preview, setPreview] = useState();
  const { id } = match.params;

  useEffect(() => {
    async function loadInitialData(delivererId) {
      if (delivererId) {
        const response = await api.get(`deliverers/${delivererId}`);

        if (response.data.avatar) {
          setPreview(response.data.avatar.url);
        }

        setNewDeliverer(response.data);
      }
    }

    loadInitialData(id);
  }, [id]);

  async function handleNewDeliverer({ name, email }) {
    setNewDeliverer([name, email]);
    if (!id) {
      try {
        await api.post('/deliverers', {
          name,
          email,
          avatar_id: file,
        });

        toast.success('Entregador cadastrado com sucesso');

        setNewDeliverer('');
      } catch (err) {
        toast.error(
          'Não foi possível cadastrar o entregador no momento! Verifique os dados e tente novamente!'
        );
      }
    }

    try {
      await api.put(`deliverers/${id}`, {
        name: name || newDeliverer.name,
        email: email || newDeliverer.email,
        avatar_id: file,
      });

      toast.success('Dados do entregador atualizados com sucesso');

      history.replace('/deliverers');
    } catch (err) {
      toast.error(
        'Não foi possível atualizar o entregador! Verifique os dados e tente novamente!'
      );
    }
  }

  async function handleChange(e) {
    try {
      const data = new FormData();

      data.append('file', e.target.files[0]);

      const response = await api.post('files', data);

      setFile(response.data.id);
      setUrl(response.data.url);
      setPreview(response.data.url);

      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleNewDeliverer}>
        <FormHeader>
          <h1>{id ? 'Alterar entregador' : 'Cadastro de entregador'}</h1>
          <div>
            <BackButton onClick={() => history.replace('/deliverers')}>
              <MdChevronLeft color="#fff" size={20} />
              <strong>Voltar</strong>
            </BackButton>
            <AddButton type="submit">
              <MdCheck color="#fff" size={20} />
              <strong>Salvar</strong>
            </AddButton>
          </div>
        </FormHeader>
        <FormWrapper>
          <AvatarInput name="avatar_input">
            <label htmlFor="avatar">
              <img
                src={
                  preview ||
                  `https://api.adorable.io/avatars/120/${newDeliverer.name}.png`
                }
                alt="Avatar do usuário"
              />
              <input
                type="file"
                id="avatar"
                name="avatar_id"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          </AvatarInput>
          <Input
            placeholder={newDeliverer.name || 'José da Silva'}
            type="text"
            name="name"
          />
          <Input
            placeholder={newDeliverer.email || 'exemplo@email.com'}
            type="email"
            name="email"
          />
        </FormWrapper>
      </Form>
    </Container>
  );
}
