export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}


export const filterUniqueObjects = array => {
  const seen = new Set();
  return array.filter(obj => {
    const key = JSON.stringify(obj);
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
};