import '../scss/style.scss'

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {
      const buttons = slider.querySelectorAll(".slider-btn");
      const slides = slider.querySelectorAll(".slide");

      buttons.forEach((button, index) => {
          button.addEventListener("click", () => {
              slides.forEach(slide => slide.classList.remove("active"));
              buttons.forEach(btn => btn.classList.remove("active"));
              slides[index].classList.add("active");
              button.classList.add("active");
          });
      });
  });
});


document.querySelectorAll('.career-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      let slideId = this.getAttribute('data-slide');
      document.querySelectorAll('.career-wrapper').forEach(function(slide) {
        slide.classList.add('hidden');
      });
      document.getElementById(slideId).classList.remove('hidden');
    });
  });

  