(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mb]'),
    closeModalBtn: document.querySelector('[data-modal-close-mb]'),
    modal: document.querySelector('[data-modal-viw]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

