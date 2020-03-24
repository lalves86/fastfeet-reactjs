import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  padding: 30px;
  max-width: 345px;
  text-align: center;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    img {
      width: 32px;
      height: 32px;
    }

    span {
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      padding-bottom: 5px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.7);
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
    }
  }
`;
