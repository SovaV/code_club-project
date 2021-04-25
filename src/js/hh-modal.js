(() => {
  const refs = {
    openModalBtn: document.querySelector('[hh-data-modal-open]'),
    closeModalBtn: document.querySelector('[hh-data-modal-close]'),
    modal: document.querySelector('[hh-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

