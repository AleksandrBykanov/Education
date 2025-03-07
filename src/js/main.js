import "../scss/style.scss";

document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.speakers-container');

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll('.speakers-wrapper');
        const prevButton = slider.querySelector('.pagination-btn.prev');
        const nextButton = slider.querySelector('.pagination-btn.next');
        const paginationInfo = slider.querySelector('.pagination-info');
        let currentIndex = 0;

        function updateSlider(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(-${index * 100}%)`;
                slide.classList.toggle('active', i === index);
            });
            paginationInfo.textContent = `${index + 1} / ${slides.length}`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(currentIndex);
        });

        updateSlider(currentIndex);
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.teaching-slider');
  const slides = document.querySelectorAll('.teaching-wrapper');
  const prevButton = document.querySelector('.teach-prev');
  const nextButton = document.querySelector('.teach-next');
  const paginationInfo = document.querySelector('.teach-info');
  let currentIndex = 0;

  function updateSlider(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      paginationInfo.textContent = `${index + 1} / ${slides.length}`;
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider(currentIndex);
  });

  updateSlider(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const buttons = slider.querySelectorAll(".slider-btn");
    const slides = slider.querySelectorAll(".slide");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        slides.forEach((slide) => slide.classList.remove("active"));
        buttons.forEach((btn) => btn.classList.remove("active"));
        slides[index].classList.add("active");
        button.classList.add("active");
      });
    });
  });
});

document.querySelectorAll('.career-container').forEach(function (window) {
  window.querySelectorAll('.career-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const slideId = this.getAttribute('data-slide');
      window.querySelectorAll('.career-wrapper').forEach(function (slide) {
        slide.classList.add('hidden');
      });
      document.getElementById(slideId).classList.remove('hidden');
    });
  });
});

  
