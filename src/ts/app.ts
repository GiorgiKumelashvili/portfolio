// https://halcyon-theme.netlify.app/
// https://github.com/michalsnik/aos/tree/v2
// https://michalsnik.github.io/aos/

// navbar underline must be implemented like bottom link
// http://rainbowit.net/themes/trydo/personal-portfolio-02/#

/**
 * @todo
 * (+) scroll from tabs
 * (+) CV (plus inside about me)
 * (+) correct social links on right
 * (+) mail on old left implement
 * (+) image in about me
 * (+) projects
 *
 * responsivnes (fuuuuuuck !!!)
 */

window.addEventListener('DOMContentLoaded', () => {
	document.getElementById('nav-second-section').addEventListener('click', () => {
		document.getElementById('second-section').scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById('nav-third-section').addEventListener('click', () => {
		document.getElementById('third-section').scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById('nav-fourth-section').addEventListener('click', () => {
		document.getElementById('fourth-section').scrollIntoView({ behavior: 'smooth' });
	});
});

const navbar = document.getElementById('header');
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

	if (st > lastScrollTop) {
		// downscroll code
		navbar.classList.add('scroll');
	} else {
		// upscroll code
		navbar.classList.remove('scroll');
	}

	if (window.scrollY < 20) {
		navbar.classList.remove('scroll-background');
	} else {
		navbar.classList.add('scroll-background');
	}

	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
