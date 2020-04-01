import React, { useState } from 'react';
import { MdMoreHoriz, MdVisibility, MdEdit, MdDelete } from 'react-icons/md';

import OrderPopup from '~/components/OrderPopup';

import {
  Container,
  Badge,
  ActionList,
  ViewDetails,
  UpdateOrder,
  DeleteOrder,
  ViewPopup,
} from './styles';

export default function Actions(props) {
  const [visible, setVisible] = useState(false);
  const [order] = useState(props.data);

  function handleToggleVisible() {
    setVisible(!visible);
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
          <UpdateOrder>
            <MdEdit color="#3498db" size={20} />
            <span>Editar</span>
          </UpdateOrder>
          <DeleteOrder>
            <MdDelete color="#ec1515" size={20} />
            <span>Excluir</span>
          </DeleteOrder>
        </ActionList>
      )}
    </Container>
  );
}
