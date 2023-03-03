import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, FormField, ErrorMessage, Header, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

const YupSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'the query is too short')
    .max(100, 'the query is too long')
    .required('the query is required'),
});

export const Searchbar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      validationSchema={YupSchema}
      onSubmit={(values, actions) => onSubmit(values.query.trim())}
    >
      <Header className="searchbar">
        <Form autoComplete="off">
          <SearchButton type="submit"><BsSearch size="18" /></SearchButton>
          <FormField>
            <SearchInput name="query" type="text" autoFocus placeholder="Search images and photos" />
            <ErrorMessage name="query" component="span" />
          </FormField>
        </Form>
      </Header> 
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
