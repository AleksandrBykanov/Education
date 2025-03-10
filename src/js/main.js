import "../scss/style.scss";

const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');


burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
});

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
  const slider = document.querySelector('.program-container');
  const slides = slider.querySelectorAll('.speakers-wrapper');
  const prevButton = slider.querySelector('.accordeon-left');
  const nextButton = slider.querySelector('.accordeon-right');
  const start = slider.querySelector('.accordeon-start');
  const finish = slider.querySelector('.accordeon-finish');
  let currentIndex = 0;
  finish.textContent = slides.length;

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
      slide.classList.toggle('active', i === index);
    });
    start.textContent = `${index + 1}`;
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


document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.accordeon-list');
    const plusButton = document.querySelector('.accordeon-plus');
    const collapseButton = document.querySelector('.accordeon-btn-down');
  
    plusButton.addEventListener('click', () => {
      content.classList.remove('active');
    });
  
    collapseButton.addEventListener('click', () => {
      content.classList.add('active');
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

const slides = document.querySelectorAll('.tariffs-wrapper');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');
const sliderContainer = document.querySelector('.tariffs-slider');
let currentIndex = 1;
let isSliderActive = true;

function updateSlider(index) {
    if (!isSliderActive) return; 

    const slider = document.querySelector('.tariffs-slider');
    slider.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


function checkScreenWidth() {
    if (window.matchMedia('(min-width: 1001px)').matches) {
        isSliderActive = false; 
        sliderContainer.style.transform = `translateX(0)`; 
    } else {
        isSliderActive = true; 
        updateSlider(currentIndex); 
    }
}


checkScreenWidth();
updateSlider(currentIndex);


prevButton.addEventListener('click', () => {
    if (isSliderActive) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (isSliderActive) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (isSliderActive) {
            currentIndex = index;
            updateSlider(currentIndex);
        }
    });
});


window.addEventListener('resize', checkScreenWidth);

const items = document.querySelectorAll('.reviews-wrapper'); 
const pags = document.querySelectorAll('.dots'); 
const prevBtn = document.querySelector('.arrows-left'); 
const nextBtn = document.querySelector('.arrows-right'); 
const reviewsContainer = document.querySelector('.reviews-slider'); 
let currentI = 1; 


function update(index) {
    const offset = index * 100; 
    reviewsContainer.style.transform = `translateX(-${offset}%)`; 


    items.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });


    pags.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


update(currentI);


prevBtn.addEventListener('click', () => {
    currentI = (currentI - 1 + items.length) % items.length; 
    update(currentI);
});

nextBtn.addEventListener('click', () => {
    currentI = (currentI + 1) % items.length; 
    update(currentI);
});


pags.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentI = index; 
        update(currentI);
    });
});
