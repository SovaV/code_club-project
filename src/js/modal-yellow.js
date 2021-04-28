

  (() => {
    const menuBtnRef = document.querySelector("[data-modal-open-yellow]");
    const mobileMenuRef = document.querySelector("[data-modal-yellow]");
    const mobileBtnClose = document.querySelector("[data-modal-close-yellow]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })
  
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })()