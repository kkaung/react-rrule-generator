import React from 'react';
import PropTypes from 'prop-types';

const IntervalSelect = props => (
  <select
    name={props.name}
    id={props.id}
    aria-label={props.ariaLabel}
    className="form-control"
    value={props.value}
    onChange={props.onChange}
  >
    { props.numberOptions.map(num => (
      <option value={num} key={num}>{num}</option>
    )) }
  </select>
);

IntervalSelect.propTypes = {
  numberOptions: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

IntervalSelect.defaultProps = {
  numberOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
};

export default IntervalSelect;
