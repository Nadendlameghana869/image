// JavaScript for image gallery

const currentImage = document.getElementById('current-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Set initial image
currentImage.src = thumbnails[currentIndex].src;

// Function to switch to the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
        currentIndex = 0;
    }
    currentImage.src = thumbnails[currentIndex].src;
}

// Function to switch to the previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1;
    }
    currentImage.src = thumbnails[currentIndex].src;
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Event listeners for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        currentImage.src = thumbnail.src;
    });
});