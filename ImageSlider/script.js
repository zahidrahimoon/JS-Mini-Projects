document.addEventListener('DOMContentLoaded', function() {
    var sliderImages = document.querySelectorAll('.slider-img');

    sliderImages.forEach(function(sliderImg) {
        sliderImg.addEventListener('click', function() {
            sliderImages.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
