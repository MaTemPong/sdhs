import styled from 'styled-components';

import { Button } from '../../components/Button/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0 0 10px rgba(156, 156, 156, 1);
  border-radius: 10px;
  background-color: black;
  color: white;
  gap: 16px;
  > div {
    font-size: 1.5rem;
    font-weight: bold;
  }
  > ${Button} {
    padding: 8px 10px;
    font-size: 16px;
    border: none;
    &:hover {
      cursor: pointer;
      background-color: gray;
    }
    > a {
      color: #000000;
      text-decoration: none;
    }
  }
`;
