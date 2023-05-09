import styled from 'styled-components';
import { Button } from '../../../components/Button/styled';

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  > ${Button} {
    width: 80px;
    padding: 10px;
    background-color: blue;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: solid black 2px;
`;
