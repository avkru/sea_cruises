const toggle = document.getElementById('btn-toggle');
      
const menu = document.getElementById('main-menu');
      
const text = document.getElementById('btn-text');

toggle.addEventListener('click', function() {
  menu.classList.toggle('list-hidden');

  if (menu.classList.contains('list-hidden')) {
    text.textContent = 'Открыть главное меню';
  } else {
    text.textContent = 'Закрыть главное меню';
  }
});