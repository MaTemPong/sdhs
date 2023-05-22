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
    border: none;
    border-radius: 0 10px 10px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  border-radius: 0 0 0 10px;
  border-bottom: solid black 2px;
`;
