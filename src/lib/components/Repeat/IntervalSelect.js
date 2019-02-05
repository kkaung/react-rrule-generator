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
      <option value={num}>{num}</option>
    )) }
  </select>
);

IntervalSelect.propTypes = {
  numberOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default IntervalSelect;
