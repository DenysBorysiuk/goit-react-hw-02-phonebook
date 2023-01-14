import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  margin-bottom: 20px;
  outline: none;
  border-radius: 3px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgba(2, 52, 201, 1);
  }
`;
