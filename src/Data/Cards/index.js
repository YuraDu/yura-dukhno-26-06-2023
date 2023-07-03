// const figures = [];
// const availableImages = [...Array(10).keys()]; // Array containing numbers 0 to 9

// for (let i = 0; i < 5; i++) {
//   const randomIndex = Math.floor(Math.random() * availableImages.length);
//   const randomImage = availableImages[randomIndex];

//   figures.push({
//     name: `Card ${i + 1}`,
//     image: `./assets/images/${randomImage}.png`,
//   });

//   availableImages.splice(randomIndex, 1);
// }

// export default figures;

const imageUrls = [
  "https://imgtr.ee/images/2023/07/03/e3010d9b18b258cbdfb364d1814d85d4.png",
  "https://imgtr.ee/images/2023/07/03/7c9808a1a9e19c656a3be7040bd776bf.png",
  "hhttps://imgtr.ee/images/2023/07/03/80f4ea65f280b10c9b188f2fc93db733.png",
  "https://imgtr.ee/images/2023/07/03/761b60eb40bc4d20e852eeb85452c34e.png",
  "https://imgtr.ee/images/2023/07/03/6bdfe0550b6bc6d8b909fb1ce42e30a3.png",
  "https://imgtr.ee/images/2023/07/03/a4af16b6fed32980cdb7a25169845aa5.png",
  "https://imgtr.ee/images/2023/07/03/6928aee5755ae282df9ac34f7b5f0d34.png",
  "https://imgtr.ee/images/2023/07/03/fa6688b960112ee2329e9454ff447972.png",
  "https://imgtr.ee/images/2023/07/03/169c3e4068b173c52f34f208dc3b578e.png",
  "https://imgtr.ee/images/2023/07/03/82ee37fe5e50b389546f4cca7739ac9a.png",
];

const getRandomImages = count => {
  const shuffledImages = [...imageUrls].sort(() => 0.5 - Math.random());
  return shuffledImages.slice(0, count).map((imageUrl, index) => ({
    name: `Card ${index + 1}`,
    image: imageUrl,
  }));
};

const figures = getRandomImages(5);

export default figures;
