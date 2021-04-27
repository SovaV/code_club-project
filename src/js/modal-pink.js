
  (() => {
    const menuBtnRef = document.querySelector("[data-modal-open-pink]");
    const mobileMenuRef = document.querySelector("[data-modal-pink]");
    const mobileBtnClose = document.querySelector("[data-modal-close-pink]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })
  
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })()