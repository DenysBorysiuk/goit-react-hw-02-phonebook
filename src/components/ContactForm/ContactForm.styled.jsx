import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 500;
`;

export const FormBtn = styled.button`
  display: block;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgba(2, 52, 201, 1);
  }
  &:active {
    background-color: blue;
  }
`;
