const computeMonthlyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.monthly.interval;
  }

  return rruleObj.interval || 1;
};

export default computeMonthlyInterval;
