import React, { useState } from 'react';
import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Badge,
  ActionList,
  UpdateOrder,
  DeleteOrder,
  ViewPopup,
  ConfirmExclusion,
} from '~/components/Actions/styles';

export default function Actions(props) {
  const [visible, setVisible] = useState(false);
  const [confirmDelete] = useState(false);
  const [recipient] = useState(props.data);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    await api.delete(`/recipients/${recipient.id}`);

    window.location.reload(confirmDelete);

    toast.success('Destinatário excluído');
  }

  return (
    <Container>
      <Badge type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#666" size={20} />
      </Badge>

      {visible && (
        <ActionList>
          <UpdateOrder
            onClick={() => history.push(`newrecipient/${recipient.id}`)}
          >
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
              <h5>Isto irá excluir o destinatário permanentemente!</h5>
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
