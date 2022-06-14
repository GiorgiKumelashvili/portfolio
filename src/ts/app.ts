// https://halcyon-theme.netlify.app/
// https://github.com/michalsnik/aos/tree/v2
// https://michalsnik.github.io/aos/

// /**
//  * @todo
//  * responsivnes (fuuuuuuck !!!)
//  */

const openSidebar = (sidenavContent: HTMLElement | null, sidenavContainer: HTMLElement | null) => {
  if (sidenavContent) {
    sidenavContent.style.transform = 'translateX(0px)';
  }

  if (sidenavContainer) {
    sidenavContainer.style.visibility = 'visible';
    sidenavContainer.style.opacity = '1';
  }
};

const closeSidebar = (sidenavContent: HTMLElement | null, sidenavContainer: HTMLElement | null) => {
  if (sidenavContent) {
    sidenavContent.style.transform = 'translateX(400px)';
  }

  if (sidenavContainer) {
    sidenavContainer.style.visibility = 'hidden';
    sidenavContainer.style.opacity = '1';
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const sidenavContainer = document.querySelector<HTMLElement>('.nav-link-container-mobile-blur');
  const sidenavContent = document.querySelector<HTMLElement>('.nav-link-container-mobile');

  document.querySelectorAll('.nav-second-section').forEach(el => {
    el?.addEventListener('click', () => {
      document.getElementById('second-section')?.scrollIntoView({ behavior: 'smooth' });
      closeSidebar(sidenavContent, sidenavContainer);
    });
  });

  document.querySelectorAll('.nav-third-section').forEach(el => {
    el?.addEventListener('click', () => {
      document.getElementById('third-section')?.scrollIntoView({ behavior: 'smooth' });
      closeSidebar(sidenavContent, sidenavContainer);
    });
  });

  document.querySelectorAll('.nav-fourth-section').forEach(el => {
    el?.addEventListener('click', () => {
      document.getElementById('fourth-section')?.scrollIntoView({ behavior: 'smooth' });
      closeSidebar(sidenavContent, sidenavContainer);
    });
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

  burgerIcon?.addEventListener('click', () => openSidebar(sidenavContent, sidenavContainer));
  closeSidebarIcon?.addEventListener('click', () => closeSidebar(sidenavContent, sidenavContainer));
  sidenavContainer?.addEventListener('click', () => closeSidebar(sidenavContent, sidenavContainer));
})();

