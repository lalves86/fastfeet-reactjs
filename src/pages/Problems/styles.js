import styled from 'styled-components';

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
