
  (() => {
    const menuBtnRef = document.querySelector("[data-modal-open-green]");
    const mobileMenuRef = document.querySelector("[data-modal-green]");
    const mobileBtnClose = document.querySelector("[data-modal-close-green]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })
  
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })()