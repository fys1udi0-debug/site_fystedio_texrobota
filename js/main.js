// МОБІЛЬНЕ МЕНЮ: відкриває/закриває навігацію на малих екранах.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });
}
// АКТИВНА ВКЛАДКА: автоматично підсвічує сторінку, яку зараз відкрито.
const currentPage = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.site-nav a').forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
