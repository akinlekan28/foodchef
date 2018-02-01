document.addEventListener('DOMContentLoaded', showSlides);
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', testSlides);
let testSlideIndex = 0;

function responsiveness() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function testSlides() {
  let i;
  const slides = document.getElementsByClassName("testSlides");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  testSlideIndex++;
  if (testSlideIndex > slides.length) { testSlideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[testSlideIndex - 1].style.display = "block";
  dots[testSlideIndex - 1].className += " active";
  setTimeout(testSlides, 3000); // Change image every 3 seconds
}

function initMap() {
  var uluru = { lat: 6.465422, lng: 3.406448 }; 6.465422
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}