import { isNaN } from 'lodash';

const numericalFieldHandler = callback => (event) => {
  // Convert input from a string to a number
  const inputNumber = +event.target.value;
  // Check if is a number and is less than 1000
  if (isNaN(inputNumber)
  || inputNumber === null
  || typeof(inputNumber) == 'undefined'
  || inputNumber >= 1000) {
    return 1;
  }

  const editedEvent = { target: { value: inputNumber, name: event.target.name } };
  callback(editedEvent);
};

export default numericalFieldHandler;
