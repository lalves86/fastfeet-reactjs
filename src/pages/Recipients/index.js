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

export default function Orders() {
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: {
        page,
      },
    });

    if (response.data.length < 10) {
      setNextDisabled(true);
    }

    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [page]);

  async function handleSearch(event) {
    setSearch(event.target.value);

    const response = await api.get('recipients', {
      params: {
        r: event.target.value,
      },
    });

    setRecipients(response.data);
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
      setPrevDisabled(true);
      setNextDisabled(false);
    }
  }

  function handleNextPage() {
    if (recipients.length === 10) {
      setPage(page + 1);
      setPrevDisabled(false);
      setNextDisabled(true);
    }
  }

  return (
    <Container>
      <h1>Gestão de Destinatários</h1>
      <div>
        <SearchBar>
          <MdSearch color="#ccc" size={20} />
          <input
            name="search"
            onChange={handleSearch}
            type="text"
            placeholder="Buscar por destinatários"
          />
        </SearchBar>
        <AddButton type="button">
          <Link to="/newrecipient">
            <MdAdd color="#fff" size={20} />
            <strong>Cadastrar</strong>
          </Link>
        </AddButton>
      </div>
      <TableHead>
        <strong>ID</strong>
        <strong>Nome</strong>
        <strong>Endereço</strong>
        <strong>Ações</strong>
      </TableHead>
      {recipients.map((recipient) => (
        <TableBody key={recipient.id}>
          <span>{recipient.id}</span>
          <span>{recipient.name}</span>
          <span>{`${recipient.street}, ${recipient.number} - ${recipient.complement}, ${recipient.city} - ${recipient.state}`}</span>
          <div className="action">
            <Actions data={recipient} />
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
