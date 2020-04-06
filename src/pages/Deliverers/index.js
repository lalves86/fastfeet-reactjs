import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import Actions from './Actions';

import {
  Container,
  SearchBar,
  AddButton,
  TableHead,
  TableBody,
  Pagination,
} from './styles';

export default function Deliverers() {
  const [deliverers, setDeliverers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  async function loadDeliverers() {
    const response = await api.get('deliverers', {
      params: {
        page,
      },
    });

    setDeliverers(response.data);

    if (response.data.length < 10) {
      setNextDisabled(true);
    }
  }

  useEffect(() => {
    loadDeliverers();
  }, [page]);

  async function handleSearch(event) {
    setSearch(event.target.value);

    const response = await api.get('deliverers', {
      params: {
        d: event.target.value,
      },
    });

    setDeliverers(response.data);
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
      setPrevDisabled(true);
      setNextDisabled(false);
    }
  }

  function handleNextPage() {
    if (deliverers.length === 10) {
      setPage(page + 1);
      setPrevDisabled(false);
      setNextDisabled(true);
    }
  }

  return (
    <Container>
      <h1>Gestão de Entregadores</h1>
      <div>
        <SearchBar>
          <MdSearch color="#ccc" size={20} />
          <input
            name="search"
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por entregadores"
          />
        </SearchBar>
        <AddButton type="button">
          <Link to="/newdeliverer">
            <MdAdd color="#fff" size={20} />
            <strong>Cadastrar</strong>
          </Link>
        </AddButton>
      </div>
      <TableHead>
        <strong>ID</strong>
        <strong>Foto</strong>
        <strong>Nome</strong>
        <strong>E-mail</strong>
        <strong>Ações</strong>
      </TableHead>
      {deliverers.map((deliverer) => (
        <TableBody key={deliverer.id}>
          <span>{deliverer.id}</span>
          <span>
            <img
              src={
                deliverer.avatar
                  ? deliverer.avatar.url
                  : `https://api.adorable.io/avatars/120/${deliverer.name}.png`
              }
              alt="Avatar do usuário"
            />
          </span>
          <span>{deliverer.name}</span>
          <span>{deliverer.email}</span>
          <div className="action">
            <Actions data={deliverer} />
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
