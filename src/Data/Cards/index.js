// const figures = [
//   {
//     name: "centzontotochtin",
//     image: "/src/assets/images/1.png",
//     flipped: false,
//   },
//   {
//     name: "coder",
//     image: "/src/assets/images/2.png",
//     flipped: false,
//   },
//   {
//     name: "ulitka",
//     image: "/src/assets/images/3.png",
//     flipped: false,
//   },
//   {
//     name: "Junona",
//     image: "/src/assets/images/4.png",
//     flipped: false,
//   },
//   {
//     name: "Diamond",
//     image: "/src/assets/images/5.png",
//     flipped: false,
//   },
// ];

// export default figures

const figures = [];
const availableImages = [...Array(10).keys()]; // Array containing numbers 0 to 9

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const randomImage = availableImages[randomIndex];

  figures.push({
    name: `Card ${i + 1}`,
    image: `/src/assets/images/${randomImage}.png`,
    flipped: false,
  });

  availableImages.splice(randomIndex, 1);
}

export default figures;