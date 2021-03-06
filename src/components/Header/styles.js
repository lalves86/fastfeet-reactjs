import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 130px;
      height: 22px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #ccc;
      padding: 0 10px;
      &:hover {
        color: ${darken(0.5, '#eee')};
      }
      &:active {
        color: #000;
      }
    }
    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  strong {
    display: block;
    color: #333;
  }

  button {
    border: none;
    background: #fff;
    padding: 5px 0;
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #fd1a1a;

    &:hover {
      color: ${darken(0.1, '#fd1a1a')};
    }
  }
`;
