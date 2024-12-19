const images = [
    "./assets/entrada.jpeg", 
    "./assets/lavabo.jpeg",
    "./assets/imagen.jpeg"
];


let currentImageIndex = 0;
let imageElement = document.querySelector('.desktop-image');



imageElement.src = images[currentImageIndex];

function changeImage() {
    imageElement.style.opacity = 0;
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        imageElement.onload = function() {
            setTimeout(() => {
                imageElement.style.opacity = 1;
            }, 50);
        };
    }, 1000);
}
setInterval(changeImage, 5000);

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Activa o desactiva la clase 'active'
    menuToggle.classList.toggle('active'); // Animación para el botón de hamburguesa
});
