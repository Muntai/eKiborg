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




window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 80);
});

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
sr.reveal ('.container',{delay:300});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,.contact',{delay:300});


