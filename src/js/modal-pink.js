
  (() => {
    const menuBtnRef = document.querySelector("[data-modal-open]");
    const mobileMenuRef = document.querySelector("[data-modal]");
    const mobileBtnClose = document.querySelector("[data-modal-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })
  
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })()