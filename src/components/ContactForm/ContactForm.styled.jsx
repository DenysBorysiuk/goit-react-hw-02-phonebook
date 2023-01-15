import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 400px;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 3px;
  box-shadow: 0px -2px 5px 3px rgba(0, 0, 0, 0.33);
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 4px;
  margin-bottom: 25px;
  outline: none;
  border-radius: 3px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 4px 1px rgba(2, 52, 201, 1);
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  display: block;
  top: 45px;
  left: 0;
  color: red;
  font-size: 11px;
`;

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
