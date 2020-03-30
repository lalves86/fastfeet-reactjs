import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  Container,
  AddButton,
  BackButton,
  FormHeader,
  FormWrapper,
  Selectors,
} from './styles';

export default function NewOrder() {
  const [deliverers, setDeliverers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [newDeliverer, setNewDeliverer] = useState('');
  const [newProduct, setNewProduct] = useState('');

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    async function loadDeliverers() {
      const response = await api.get('deliverers');

      setDeliverers(response.data);
    }

    loadRecipients();
    loadDeliverers();
  }, []);

  function handleChangeRecipient(event) {
    setNewRecipient(event.target.value);
  }

  function handleChangeDeliverer(event) {
    setNewDeliverer(event.target.value);
  }

  async function handleNewOrder({ product }) {
    setNewProduct(product);
    try {
      await api.post('/orders', {
        recipient_id: newDeliverer,
        deliverer_id: newDeliverer,
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

  return (
    <Container>
      <Form onSubmit={handleNewOrder}>
        <FormHeader>
          <h1>Novo Pedido</h1>
          <div>
            <BackButton>
              <Link to="/orders">
                <MdChevronLeft color="#fff" size={20} />
                <strong>Voltar</strong>
              </Link>
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
              <option value={newDeliverer}>Entregador</option>
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
              <option value={newRecipient}>Destinatário</option>
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
