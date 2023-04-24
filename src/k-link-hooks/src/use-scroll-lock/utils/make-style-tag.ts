export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('k-link-scroll-lock', '');

  return tag;
}
