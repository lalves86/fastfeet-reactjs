import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import {
  Container,
  AddButton,
  BackButton,
  FormHeader,
  FormWrapper,
} from './styles';

export default function NewRecipient({ match }) {
  const [newRecipient, setNewRecipient] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    async function loadInitialData(recipientId) {
      if (recipientId) {
        const response = await api.get(`recipients/${recipientId}`);

        setNewRecipient(response.data);
      }
    }

    loadInitialData(id);
  }, [id]);

  async function handleNewRecipient({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
  }) {
    if (!id) {
      try {
        await api.post('/recipients', {
          name,
          street,
          number,
          complement,
          city,
          state,
          zip,
        });

        toast.success('Cliente cadastrado com sucesso');

        setNewRecipient('');
      } catch (err) {
        toast.error(
          'Não foi possível cadastrar o cliente no momento! Verifique os dados e tente novamente!'
        );
      }
    }

    try {
      await api.put(`recipients/${id}`, {
        name: name || newRecipient.name,
        street: street || newRecipient.street,
        number: number || newRecipient.number,
        complement: complement || newRecipient.complement,
        city: city || newRecipient.city,
        state: state || newRecipient.state,
        zip: zip || newRecipient.zip,
      });

      toast.success('Cliente atualizado com sucesso');

      history.replace('/recipients');
    } catch (err) {
      toast.error(
        'Não foi possível atualizar o cliente! Verifique os dados e tente novamente!'
      );
    }
  }
  return (
    <Container>
      <Form onSubmit={handleNewRecipient}>
        <FormHeader>
          <h1>{id ? 'Alterar Destinatário' : 'Cadastrar destinatário'}</h1>
          <div>
            <BackButton onClick={() => history.replace('/recipients')}>
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
          <span>Nome</span>
          <Input
            placeholder={newRecipient.name || 'Nome do destinatário'}
            type="text"
            name="name"
          />
          <div className="address-1">
            <span>Rua</span>
            <span>Número</span>
            <span>Complemento</span>
            <Input
              className="street"
              placeholder={newRecipient.street || 'Rua'}
              type="text"
              name="street"
            />
            <Input
              placeholder={newRecipient.number || 'Número'}
              type="number"
              name="number"
            />
            <Input
              placeholder={newRecipient.complement || 'Complemento'}
              type="text"
              name="complement"
            />
          </div>
          <div className="address-2">
            <span>Cidade</span>
            <span>Estado</span>
            <span>CEP</span>
            <Input
              placeholder={newRecipient.city || 'Cidade'}
              type="text"
              name="city"
            />
            <Input
              placeholder={newRecipient.state || 'Estado'}
              type="text"
              name="state"
            />
            <Input
              placeholder={newRecipient.zip || 'CEP'}
              type="text"
              name="zip"
            />
          </div>
        </FormWrapper>
      </Form>
    </Container>
  );
}
