(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-viw]'),
    closeModalBtn: document.querySelector('[data-modal-close-viw]'),
    modal: document.querySelector('[data-modal-viw]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

