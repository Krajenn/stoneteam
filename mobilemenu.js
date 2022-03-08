const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.topnav');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('active');
}

hamburger.addEventListener('click', handleClick);


// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll" ,function()
// {
//   let offset = window.pageXOffset;
//   parallax.style.backgroundPositionY = offset * 0.5 + "px"
// })
