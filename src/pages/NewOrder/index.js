import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  AddButton,
  BackButton,
  FormHeader,
  FormWrapper,
  Selectors,
} from './styles';

export default function NewOrder() {
  return (
    <Container>
      <FormHeader>
        <h1>Novo Pedido</h1>
        <div>
          <BackButton>
            <Link to="/orders">
              <MdChevronLeft color="#fff" size={20} />
              <strong>Voltar</strong>
            </Link>
          </BackButton>
          <AddButton>
            <MdCheck color="#fff" size={20} />
            <strong>Salvar</strong>
          </AddButton>
        </div>
      </FormHeader>
      <FormWrapper>
        <Form>
          <Selectors>
            <select name="" id="">
              <option value="">Entregador</option>
              <option value="1">Roger Rabbit</option>
              <option value="2">Mandalorian</option>
            </select>
            <select name="" id="">
              <option value="">Destinatário</option>
              <option value="1">Roger Rabbit</option>
              <option value="2">Mandalorian</option>
            </select>
          </Selectors>
          <Input placeholder="Produto" type="text" name="product" />
        </Form>
      </FormWrapper>
    </Container>
  );
}
