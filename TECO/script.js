document.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    header.style.top = '-70px';
  } else {
    header.style.top = '0';
  }
  
  let currentIndex = 0;
  const contents = document.querySelectorAll('.industry-content');

  function showNextContent() {
      contents[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % contents.length;
      contents[currentIndex].classList.add('active');
  }

  setInterval(showNextContent, 9000); // Change content every 9 seconds//
  function generateNumber() {
    const randomNumber= Math.floor(Math.randomm()*1000000);
    document.getElementById('numberDisplay').textVontent=randomNumber;}
    const slider = document.querySelector('.slider');
let slideIndex = 0;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    const offset = -slideIndex * 100;
    slider.style.transform =' translateX(${offset}%)';
}

// Automatically slide images every 3 seconds
setInterval(showNextSlide, 3000);
function goBack(){
  window.history.back();
}

});
