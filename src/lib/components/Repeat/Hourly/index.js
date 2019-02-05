import React from 'react';
import PropTypes from 'prop-types';
import IntervalSelect from '../IntervalSelect';

const RepeatHourly = ({
  id,
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-1 offset-sm-2">
      every
    </div>
    <div className="col-sm-2">
      <IntervalSelect
        id={`${id}-interval`}
        name="repeat.hourly.interval"
        ariaLabel="Repeat hourly interval"
        value={interval}
        onChange={handleChange}
        numberOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]}
      />
    </div>
    <div className="col-sm-1">
      day(s)
    </div>
  </div>
);
RepeatHourly.propTypes = {
  id: PropTypes.string.isRequired,
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
