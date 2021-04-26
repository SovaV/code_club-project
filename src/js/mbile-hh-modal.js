(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalmb-open]'),
    closeModalBtn: document.querySelector('[data-modalmd-close]'),
    modal: document.querySelector('[data-modalh]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hiddens');
  }
})();

