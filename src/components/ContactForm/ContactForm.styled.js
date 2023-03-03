import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import { Button } from '../GlobalStyle'

export const Form = styled(FormikForm)`
  width: 320px;
  margin: 16px 0;
  padding: 16px;
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const AddButton = styled(Button)`
  padding: 4px 8px;
  width: 40%;
`;
