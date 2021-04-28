(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-f-open]'),
    closeModalBtn: document.querySelector('[data-modal-f-close]'),
    modal: document.querySelector('[data-f-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

