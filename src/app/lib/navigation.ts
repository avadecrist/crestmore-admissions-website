export function navigateToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth' });

  const newHash = `#${id}`;
  history.replaceState(null, '', `/${newHash}`);

  // Ensure listeners update (remember replaceState does NOT fire hashchange)
  window.dispatchEvent(new HashChangeEvent('hashchange'));

  if (element instanceof HTMLElement) element.focus({ preventScroll: true }); // for accessibility--focus the section after scrolling
}
