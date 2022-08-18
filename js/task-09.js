const buttoncChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
buttoncChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math
    .floor(Math.random() * 16777215)
    .toString(16)}`;
}
