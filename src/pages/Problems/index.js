import React, { useState, useEffect } from 'react';

import { Container, TableHead, TableBody } from './styles';

import api from '~/services/api';
import Actions from './Actions';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get('problems');

    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <h1>Problemas na entrega</h1>
      <TableHead>
        <strong>ID do pedido</strong>
        <strong>Problema</strong>
        <strong>Ações</strong>
      </TableHead>
      {problems.map((problem) => (
        <TableBody key={problem.id}>
          <span>{problem.delivery.id}</span>
          <span>{problem.description}</span>
          <div className="action">
            <Actions data={problem} />
          </div>
        </TableBody>
      ))}
    </Container>
  );
}
