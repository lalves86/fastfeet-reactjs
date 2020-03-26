import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  SearchBar,
  AddButton,
  TableHead,
  TableBody,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');

      setOrders(response.data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <h1>Gestão de Encomendas</h1>
      <div>
        <SearchBar>
          <MdSearch color="#ccc" size={20} />
          <input type="text" placeholder="Buscar por encomendas" />
        </SearchBar>
        <AddButton type="button">
          <Link to="/neworder">
            <MdAdd color="#fff" size={20} />
            <strong>Cadastrar</strong>
          </Link>
        </AddButton>
      </div>
      <TableHead>
        <strong>ID</strong>
        <strong>Destinatário</strong>
        <strong>Entregador</strong>
        <strong>Cidade</strong>
        <strong>Estado</strong>
        <strong>Status</strong>
        <strong>Ações</strong>
      </TableHead>
      {orders.map((order) => (
        <TableBody>
          <span>{order.id}</span>
          <span>{order.recipient.name}</span>
          <span>{order.deliverer.name}</span>
          <span>{order.recipient.city}</span>
          <span>{order.recipient.state}</span>
          <span>{!order.end_date ? 'Entregue' : 'Pendente'}</span>
          <span>...</span>
        </TableBody>
      ))}
    </Container>
  );
}
