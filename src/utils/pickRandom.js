const pickRandom = (array, quantity) => {
  console.log("pickRandom");
  if (quantity <= 0) {
    return "quantity debe ser mayor a 0";
  }
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5); // Mezcla el array
  const selectedElements = shuffledArray.slice(0, quantity);
  // console.log(selectedElements);
  return selectedElements;
};

module.exports = pickRandom;
