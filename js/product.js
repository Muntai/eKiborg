// получаем элементы DOM
const mainImg = document.querySelector(".img-container-product img");
const thumbnailImgs = document.querySelectorAll(".hover-container-product img");

// добавляем обработчики событий на эскизы
thumbnailImgs.forEach((img) => {
    img.addEventListener("click", () => {
        // заменяем основное изображение на изображение, на которое кликнули
        mainImg.src = img.src;
    });
});



// const allHoverImages = document.querySelectorAll('.hover-container-product div img');
// const imgContainer = document.querySelector('.img-container-product');
//
// window.addEventListener('DOMContentLoaded', () => {
//     allHoverImages[0].parentElement.classList.add('active');
// });
//
// allHoverImages.forEach((image) => {
//     image.addEventListener('mouseover', () =>{
//         imgContainer.querySelector('img').src = image.src;
//         resetActiveImg();
//         image.parentElement.classList.add('active');
//     });
// });
//
// function resetActiveImg(){
//     allHoverImages.forEach((img) => {
//         img.parentElement.classList.remove('active');
//     });
// }