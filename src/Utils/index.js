export const  checkConsecutiveTrue = (pairs) => {
  let consecutiveCount = 0;

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i].concurrence) {
      consecutiveCount++;

      if (consecutiveCount === 3) {
        return true;
      }
    } else {
      consecutiveCount = 0;
    }
  }

  return false;
}

export const checkConsecutiveFalse = (pairs) => {
  let consecutiveCount = 0;

  for (let i = 0; i < pairs.length; i++) {
    if (!pairs[i].concurrence) {
      consecutiveCount++;

      if (consecutiveCount === 3) {
        return true;
      }
    } else {
      consecutiveCount = 0;
    }
  }

  return false;
}
