import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  max-width: 800px;

  h1 {
    font-size: 22px;
    padding: 0 0 10px;
  }

  a {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  padding: 10px;
  background: #7159c1;
  border-radius: 4px;
  border: none;
  color: #fff;
  margin-left: 5px;

  &:hover {
    background: ${darken(0.08, '#7159c1')};
  }
`;

export const BackButton = styled.button`
  padding: 10px;
  background: #ccc;
  border-radius: 4px;
  border: none;
  color: #fff;
  margin-left: 5px;

  &:hover {
    background: ${darken(0.08, '#ccc')};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 20px;

  input {
    flex: 1;
    background: #fafafa;
    border: 1px solid rgb(169, 169, 169);
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
  }

  span {
    margin: 10px 0 2px 10px;
    font-weight: bold;
  }

  .address-1 {
    display: grid;
    grid-template-columns: 50% 25% 25%;
  }

  .address-2 {
    display: grid;
    grid-template-columns: 50% 25% 25%;
  }
`;
