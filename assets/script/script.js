// Array com os caminhos para as suas imagens de banner
const bannerImages = [
    'assets/img/gallery/home-banner1.png',
    'assets/img/gallery/home-banner2.png',
    'assets/img/gallery/home-banner3.png',
    'assets/img/gallery/home-banner4.png'
];

// Função para mudar a imagem do banner
function changeBannerImage() {
    const banner = document.querySelector('.banner');
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
    banner.style.backgroundImage = `url(${randomImage})`;
}

// Mudar a imagem do banner ao carregar a página
window.onload = changeBannerImage;
