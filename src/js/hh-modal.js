(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mb]'),
    modal: document.querySelector('[data-modal-mb]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

