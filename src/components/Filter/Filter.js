import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterWrap>
      <label>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </FilterWrap>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
