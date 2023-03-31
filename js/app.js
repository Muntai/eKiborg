const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});


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


let darkmode = document.querySelector('#darkmode');
let logo = document.querySelector('#logo');
darkmode.onclick = () => {
	if(darkmode.classList.contains('bx-moon')){
		darkmode.classList.replace('bx-moon', 'bx-sun');
		document.body.classList.add('color');
		logo.src = './img/logo-ekiborg-white.svg';
	}else{
		darkmode.classList.replace('bx-sun', 'bx-moon');
		document.body.classList.remove('color');
		logo.src = './img/logo-ekiborg-black.svg';
	}
};

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '70px',
	duration: 2700,
	reset: true
});

sr.reveal('.hero-text',{delay:200, origin: 'bottom'});
sr.reveal('.hero-img',{delay:350, origin: 'top'});
sr.reveal('.scroll',{delay:450, origin: 'right'});
sr.reveal('.scroll',{delay:450, origin: 'right'});
//sr.reveal ('.container',{delay:300});

//sr.reveal ('.about-img',{});
//sr.reveal ('.about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

//sr.reveal ('.contact',{delay:300});



/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)