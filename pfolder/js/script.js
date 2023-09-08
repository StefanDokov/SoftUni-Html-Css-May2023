const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider-list');
const images = document.querySelectorAll('.slider-list li');

let currentIndex = 0;

slider.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
});

function updateSliderPosition() {
  const slideWidth = images[currentIndex].clientWidth;
  sliderList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

const textz = document.querySelector('.texter p');
textz.innerHTML = textz.innerText.split("").map(
  (char, i) => `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join("")


let scrollContainer = document.querySelector(".sliderdiv");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1040;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1040;
});

const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMenu = document.querySelector('.dropdown_menu');
         
        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.classList = isOpen? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }