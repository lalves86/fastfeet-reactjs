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
`;

export const Selectors = styled.div`
  display: flex;

  select {
    flex: 1;
    background: #fafafa;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
