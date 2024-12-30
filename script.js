function createSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');

    let currentIndex = 0;

    const updateSlider = () => {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const goToNextSlide = () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateSlider();
    };

    const goToPrevSlide = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop to the end
        }
        updateSlider();
    };

    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);

    window.addEventListener('resize', updateSlider); // Handle resizing
}

// Initialize sliders
createSlider('slider1');
createSlider('slider2');
