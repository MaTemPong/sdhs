import styled from 'styled-components';
import { Button } from '../../components/Button/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  ${Button} {
    &:nth-child(4) {
      background-color: red;
      color: white;
    }
  }
`;

export const Title = styled.h2``;
