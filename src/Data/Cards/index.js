const figures = [];
const availableImages = [...Array(10).keys()]; // Array containing numbers 0 to 9

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const randomImage = availableImages[randomIndex];

  figures.push({
    name: `Card ${i + 1}`,
    image: `/assets/images/${randomImage}.png`,
  });

  availableImages.splice(randomIndex, 1);
}

export default figures;