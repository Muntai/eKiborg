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
}

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
