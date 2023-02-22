import axios from "axios";
import bannerTemplate from "../template/partials/banner.handlebars";

let slideIndex = 1;

const getBannerData = async () => {
    try {
        const resp =  await axios.get('http://localhost:3003/api/v1/banner');
        let data = resp?.data || {};
        createBannerHtml(data);
    } catch(error) {
        console.log("err " + error);
    }
}

const createBannerHtml = (data) => {
    const bannerContainer = document.querySelector("#slider");
    bannerContainer.innerHTML = bannerTemplate(data);
    showSlides(slideIndex);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");  
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

window.currentSlide = currentSlide;
getBannerData();

