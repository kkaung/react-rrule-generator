const computeWeeklyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== 2) {
    return data.repeat.weekly.interval || 1;
  }

  return rruleObj.interval || 1;
};

export default computeWeeklyInterval;
