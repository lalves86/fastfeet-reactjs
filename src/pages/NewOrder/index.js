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
  Selectors,
} from './styles';

export default function NewOrder({ match }) {
  const [deliverers, setDeliverers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [newDeliverer, setNewDeliverer] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const { id } = match.params;

  useEffect(() => {
    async function loadInitialData(orderId) {
      if (orderId) {
        const response = await api.get(`orders/${orderId}`);

        setNewRecipient(response.data.recipient);
        setNewDeliverer(response.data.deliverer);
        setNewProduct(response.data.product);
      }
    }

    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    async function loadDeliverers() {
      const response = await api.get('deliverers');

      setDeliverers(response.data);
    }

    loadInitialData(id);
    loadRecipients();
    loadDeliverers();
  }, [id]);

  function handleChangeRecipient(event) {
    setNewRecipient(event.target.value);
  }

  function handleChangeDeliverer(event) {
    setNewDeliverer(event.target.value);
  }

  async function handleNewOrder({ product }) {
    setNewProduct(product);
    if (!id) {
      try {
        await api.post('/orders', {
          recipient_id: newRecipient.id,
          deliverer_id: newDeliverer.id,
          product,
        });

        toast.success('Pedido cadastrado com sucesso');

        setNewDeliverer('');
        setNewRecipient('');
        setNewProduct('');
      } catch (err) {
        toast.error(
          'Não foi possível cadastrar o pedido no momento! Verifique os dados e tente novamente!'
        );
      }
    }

    try {
      await api.put(`orders/${id}`, {
        recipient_id: newRecipient.id,
        deliverer_id: newDeliverer.id,
        product,
      });

      toast.success('Pedido atualizado com sucesso');

      history.replace('/orders');
    } catch (err) {
      toast.error(
        'Não foi possível atualizar o pedido! Verifique os dados e tente novamente!'
      );
    }
  }
  return (
    <Container>
      <Form onSubmit={handleNewOrder}>
        <FormHeader>
          <h1>{id ? 'Alterar Pedido' : 'Novo Pedido'}</h1>
          <div>
            <BackButton onClick={() => history.replace('/orders')}>
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
          <Selectors>
            <select
              name="deliverer"
              id="deliverer"
              onChange={handleChangeDeliverer}
            >
              <option value={newDeliverer.id}>
                {newDeliverer.name || 'Entregador'}
              </option>
              {deliverers.map((deliverer) => (
                <option
                  name={deliverer.name}
                  key={deliverer.id}
                  value={deliverer.id}
                >
                  {deliverer.name}
                </option>
              ))}
            </select>
            <select
              name="recipient"
              id="recipient"
              onChange={handleChangeRecipient}
            >
              <option value={newRecipient.id}>
                {newRecipient.name || 'Destinatário'}
              </option>
              {recipients.map((recipient) => (
                <option
                  key={recipient.id}
                  value={recipient.id}
                  name={recipient.name}
                >
                  {recipient.name}
                </option>
              ))}
            </select>
          </Selectors>
          <Input
            placeholder={newProduct || 'Produto'}
            type="text"
            name="product"
          />
        </FormWrapper>
      </Form>
    </Container>
  );
}
