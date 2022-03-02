const toggleButton = document.getElementsByClassName('toggle-button')[0]
const topnav = document.getElementsByClassName('topnav')[0]

toggleButton.addEventListener('click', () => {
  topnav.classList.toggle('active')
})


// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll" ,function()
// {
//   let offset = window.pageXOffset;
//   parallax.style.backgroundPositionY = offset * 0.5 + "px"
// })
