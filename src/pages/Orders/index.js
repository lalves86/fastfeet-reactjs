import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import Actions from '~/components/Actions';

import {
  Container,
  SearchBar,
  AddButton,
  TableHead,
  TableBody,
  Pagination,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  async function loadOrders() {
    const response = await api.get('orders', {
      params: {
        page,
      },
    });

    function changeStatus(order) {
      let status = 'PENDENTE';

      if (order.start_date !== null) {
        status = 'RETIRADA';
      }

      if (order.end_date !== null) {
        status = 'ENTREGUE';
      }

      if (order.canceled_at !== null) {
        status = 'CANCELADA';
      }

      return status;
    }

    const data = response.data.map((order) => ({
      ...order,
      status: changeStatus(order),
    }));

    setOrders(data);
  }

  useEffect(() => {
    loadOrders();
  }, [page]);

  async function handleSearch(event) {
    setSearch(event.target.value);

    const response = await api.get('orders', {
      params: {
        q: event.target.value,
      },
    });

    setOrders(response.data);
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
      setPrevDisabled(true);
      setNextDisabled(false);
    }
  }

  function handleNextPage() {
    if (orders.length === 10) {
      setPage(page + 1);
      setPrevDisabled(false);
      setNextDisabled(true);
    }
  }

  return (
    <Container>
      <h1>Gestão de Encomendas</h1>
      <div>
        <SearchBar>
          <MdSearch color="#ccc" size={20} />
          <input
            name="search"
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por encomendas"
          />
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
        <strong>Produto</strong>
        <strong>Destinatário</strong>
        <strong>Entregador</strong>
        <strong>Cidade</strong>
        <strong>Estado</strong>
        <strong>Status</strong>
        <strong>Ações</strong>
      </TableHead>
      {orders.map((order) => (
        <TableBody key={order.id}>
          <span>{order.id}</span>
          <span>{order.product}</span>
          <span>{order.recipient.name}</span>
          <span>{order.deliverer.name}</span>
          <span>{order.recipient.city}</span>
          <span>{order.recipient.state}</span>
          <span status={order.status}>{order.status}</span>
          <div className="action">
            <Actions data={order} />
          </div>
        </TableBody>
      ))}
      <Pagination>
        <button type="button" onClick={handlePrevPage} disabled={prevDisabled}>
          <MdChevronLeft color="#fff" size={20} />
          Voltar
        </button>
        <button type="button" onClick={handleNextPage} disabled={nextDisabled}>
          Próxima
          <MdChevronRight color="#fff" size={20} />
        </button>
      </Pagination>
    </Container>
  );
}
