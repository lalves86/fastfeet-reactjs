import styled from 'styled-components';
import { darken } from 'polished';
import Popup from 'reactjs-popup';

export const Container = styled.div`
  position: relative;
  border-radius: 4px;
  width: 100%;
`;

export const Badge = styled.button`
  width: 100%;
  background: none;
  border: 0;
  position: relative;
  text-align: center;
`;

export const ActionList = styled.div`
  position: absolute;
  width: 130px;
  left: calc(50% - 65px);
  top: calc(100% + 2px);
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const ViewDetails = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 12%;
  min-width: 120px;
  height: 40px;
  background: transparent;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#fafafa')};
  }

  span {
    padding-left: 5px;
    color: #666;
  }
`;

export const UpdateOrder = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 12%;
  min-width: 120px;
  height: 40px;
  background: transparent;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#fafafa')};
  }

  span {
    padding-left: 5px;
    color: #666;
  }
`;

export const DeleteOrder = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 12%;
  min-width: 120px;
  height: 40px;
  background: transparent;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#fafafa')};
  }

  span {
    padding-left: 5px;
    color: #666;
  }
`;

export const ViewPopup = styled(Popup)`
  justify-content: center;
`;
