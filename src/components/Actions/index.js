import React, { useState } from 'react';
import { MdMoreHoriz, MdVisibility, MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import OrderPopup from '~/components/OrderPopup';

import {
  Container,
  Badge,
  ActionList,
  ViewDetails,
  UpdateOrder,
  DeleteOrder,
  ViewPopup,
  ConfirmExclusion,
} from './styles';

export default function Actions(props) {
  const [visible, setVisible] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [order] = useState(props.data);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    await api.delete(`/orders/${order.id}`);

    window.location.reload(confirmDelete);

    toast.success('Pedido deletado');
  }

  return (
    <Container>
      <Badge type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#666" size={20} />
      </Badge>

      {visible && (
        <ActionList>
          <ViewPopup
            modal
            trigger={
              <ViewDetails>
                <MdVisibility color="#7159c1" size={20} />
                <span>Visualizar</span>
              </ViewDetails>
            }
          >
            <OrderPopup data={order} />
          </ViewPopup>
          <UpdateOrder onClick={() => history.push(`neworder/${order.id}`)}>
            <MdEdit color="#3498db" size={20} />
            <span>Editar</span>
          </UpdateOrder>
          <ViewPopup
            modal
            trigger={
              <DeleteOrder onClick={handleDelete}>
                <MdDelete color="#ec1515" size={20} />
                <span>Excluir</span>
              </DeleteOrder>
            }
          >
            <ConfirmExclusion>
              <h4>ATENÇÃO!!!</h4>
              <h5>Isto irá apagar o registro do banco de dados</h5>
              <p>Confirmar exclusão?</p>
              <button type="button" onClick={handleDelete}>
                Confirmar
              </button>
            </ConfirmExclusion>
          </ViewPopup>
        </ActionList>
      )}
    </Container>
  );
}
