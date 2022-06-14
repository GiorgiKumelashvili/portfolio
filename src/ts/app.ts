// https://halcyon-theme.netlify.app/
// https://github.com/michalsnik/aos/tree/v2
// https://michalsnik.github.io/aos/

/**
 * @todo
 * responsivnes (fuuuuuuck !!!)
 */

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-second-section')?.addEventListener('click', () => {
    document.getElementById('second-section')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('nav-third-section')?.addEventListener('click', () => {
    document.getElementById('third-section')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('nav-fourth-section')?.addEventListener('click', () => {
    document.getElementById('fourth-section')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const navbar = document.getElementById('header');
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (navbar) {
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
  }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

// responsivness

(function () {
  const burgerIcon = document.getElementById('open-sidebar');
  const closeSidebarIcon = document.getElementById('close-sidebar');
  const sidenavContainer = document.querySelector<HTMLElement>('.nav-link-container-mobile-blur');
  const sidenavContent = document.querySelector<HTMLElement>('.nav-link-container-mobile');

  const open = () => {
    if (sidenavContent) {
      sidenavContent.style.transform = 'translateX(0px)';
    }

    if (sidenavContainer) {
      sidenavContainer.style.visibility = 'visible';
      sidenavContainer.style.opacity = '1';
    }
  };

  const close = () => {
    if (sidenavContent) {
      sidenavContent.style.transform = 'translateX(400px)';
    }

    if (sidenavContainer) {
      sidenavContainer.style.visibility = 'hidden';
      sidenavContainer.style.opacity = '1';
    }
  };

  burgerIcon?.addEventListener('click', open);
  closeSidebarIcon?.addEventListener('click', close);
  sidenavContainer?.addEventListener('click', close);
})();

