import React, { useState } from 'react';

import { Container } from './styles';

export default function OrderPopup(props) {
  const [order] = useState(props.data);

  return (
    <Container>
      <h4>Informações da encomenda</h4>
      <p>
        {order.recipient.street},{' '}
        {order.recipient.complement
          ? `${order.recipient.number} - ${order.recipient.complement}`
          : order.recipient.number}
      </p>
      <p>
        {order.recipient.city} - {order.recipient.state}
      </p>
      <p>{order.recipient.zip}</p>
      <hr />
      <h4>Datas</h4>
      <p>
        {order.start_date
          ? `Retirada: ${order.start_date}`
          : 'Entrega não foi iniciada'}
      </p>
      <p>
        {order.end_date
          ? `Entrega: ${order.end_date}`
          : 'Produto ainda não foi entregue'}
      </p>
      <hr />
      <h4>Assinatura do destinatário</h4>
      {order.signature ? (
        <img src={order.signature.url} alt="assinatura do destinatário" />
      ) : (
        'Assinatura não disponível'
      )}
    </Container>
  );
}
