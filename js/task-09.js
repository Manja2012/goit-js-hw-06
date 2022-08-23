const buttoncChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
buttoncChangeColor.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  const bgColor = color.textContent;
  document.body.style.backgroundColor = bgColor ;
  })

function getRandomHexColor() {
  return `#${Math
    .floor(Math.random() * 16777215)
    .toString(16)}`;
}
