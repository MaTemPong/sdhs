import styled from 'styled-components';
import { Button } from '../Button/styled';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  background-color: #99ff99;
  border-radius: 5px;
  div {
    display: flex;
    gap: 5px;
    ${Button} {
      padding: 5px;
      &:nth-child(1) {
        background-color: yellow;
      }
      &:nth-child(2) {
        background-color: red;
        color: white;
      }
    }
  }
`;

export const Title = styled.p`
  font-size: 16px;
`;
