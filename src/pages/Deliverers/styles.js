import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 30px;

  h1 {
    font-size: 22px;
    padding: 0 0 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

export const SearchBar = styled.div`
  width: 40%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 10px;

  input {
    width: 100%;
    border: none;
    padding-left: 5px;
    border-left: 1px solid #eee;

    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const AddButton = styled.button`
  width: 12%;
  min-width: 120px;
  height: 30px;
  background: #7159c1;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.05, '#7159c1')};
  }

  strong {
    padding-left: 5px;
  }
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;

  strong {
    width: 100%;
    text-align: center;
  }
`;

export const TableBody = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  min-width: 700px;
  max-width: 900px;
  background: #fff;
  margin-bottom: 15px;

  span {
    flex: 1;
    max-width: 130px;
    min-width: 100px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Pagination = styled.div`
  button {
    width: 12%;
    min-width: 120px;
    height: 30px;
    background: #7159c1;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
