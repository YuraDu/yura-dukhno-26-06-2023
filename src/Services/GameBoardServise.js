export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const findCardsToShuffle = (attemptsPool, cards) => {
  const filteredAttempts = attemptsPool.filter(
    item => item.concurrence === true
  );
  const cardsToShuffle = cards.filter(card => {
    return !filteredAttempts.some(attempt => areAttemptsEqual(attempt, card));
  });

  const randomIndices = [];
  while (randomIndices.length < 2) {
    const randomIndex = Math.floor(Math.random() * cardsToShuffle.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomCards = randomIndices.map(index => ({
    card: cardsToShuffle[index],
    originalIndex: cards.indexOf(cardsToShuffle[index]),
  }));

  return randomCards;
};

const areAttemptsEqual = (attempt, card) => {
  return attempt.name === card.name;
};

export const isTruePair = (array, card) => {
  return array?.some(
    item => item.name === card.name && item.concurrence === true
  );
}