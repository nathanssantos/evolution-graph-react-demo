import order from "./order.js";

const generateSortedRandomNumbersArray = ({
  min = 0,
  max = 100,
  length = 10,
} = {}) => {
  const randomNumbersArray = [];

  for (let i = 1; i <= length; i++) {
    randomNumbersArray.push(
      Number((Math.random() * (max - min + 0.01) + min).toFixed(2))
    );
  }

  const sortedRandomNumbersArray = randomNumbersArray.sort((a, b) =>
    order(a, b, "asc")
  );

  return sortedRandomNumbersArray;
};

export default generateSortedRandomNumbersArray;
