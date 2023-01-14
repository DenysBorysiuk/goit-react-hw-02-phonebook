import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Label, FormBtn } from './ContactForm.styled';

const FormWrap = styled(Form)`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 400px;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 3px;
  box-shadow: 0px -2px 5px 3px rgba(0, 0, 0, 0.33);
`;

const Input = styled(Field)`
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

const Message = styled(ErrorMessage)`
  position: absolute;
  display: block;
  top: 45px;
  left: 0;
  color: red;
  font-size: 11px;
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Message name="number" component="div" />
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrap>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
