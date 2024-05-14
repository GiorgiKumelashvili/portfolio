interface ToggleSidebarParams {
  content?: HTMLElement | null;
  container?: HTMLElement | null;
  isOpen: boolean;
}

export const toggleSidebar = (params: ToggleSidebarParams) => {
  const { isOpen, container, content } = params;

  if (content) {
    isOpen
      ? (content.style.transform = 'translateX(0px)')
      : (content.style.transform = 'translateX(400px)');
  }

  if (container) {
    container.style.opacity = '1';
    isOpen ? (container.style.visibility = 'visible') : (container.style.visibility = 'hidden');
  }
};
