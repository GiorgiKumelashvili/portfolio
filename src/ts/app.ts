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
 * ( ) image in about me
 * ( ) projects
 *
 * responsivnes (fuuuuuuck !!!)
 */

window.addEventListener('DOMContentLoaded', event => {
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
