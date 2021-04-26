(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-yellow]'),
      closeModalBtn: document.querySelector('[data-modal-close-yellow]'),
      modal: document.querySelector('[data-modal-yellow]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();