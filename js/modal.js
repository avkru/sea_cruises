const modalOpen = document.querySelectorAll('[data-modal-open]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки для открытия модалки
modalOpen.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalOpen;
    const modal = document.querySelector('#' + modalId);

    modal.classList.remove('hidden');

    // Находим внутри открываемой модалки блок .modal-window и запрещаем ему
    // передавать  клики "наверх" (по цепочке его родителей)
    modal.querySelector('.modal-window').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
});

// Кнопки для закрытия модалки
modalClose.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    
    modal.classList.add('hidden');
  });
});

// Закрытие модалок по фейду
allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
  });
});