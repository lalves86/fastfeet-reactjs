import React, { useState } from 'react';
import { MdMoreHoriz, MdDelete, MdVisibility } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  Container,
  Badge,
  ActionList,
  ViewDetails,
  DeleteOrder,
  ViewPopup,
  ConfirmExclusion,
} from '~/components/Actions/styles';

export default function Actions(props) {
  const [visible, setVisible] = useState(false);
  const [confirmDelete] = useState(false);
  const [problem] = useState(props.data);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    try {
      await api.delete(`/problems/${problem.delivery.id}`);

      window.location.reload(confirmDelete);

      toast.success('Entrega cancelada com sucesso!');
    } catch (err) {
      toast.error(
        'Não foi possível cancelar a entrega! Verifique os dados e tente novamente!'
      );
    }
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
            <ConfirmExclusion>
              <h4>Visualizar problema</h4>
              <p>{problem.description}</p>
            </ConfirmExclusion>
          </ViewPopup>
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
              <h5>Isto irá cancelar a entrega!</h5>
              <p>Confirmar cancelamento?</p>
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
