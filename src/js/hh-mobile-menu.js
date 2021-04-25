(() => {
    const menuBtnRef = document.querySelector("[hh-data-menu-button]");
    const mobileMenuRef = document.querySelector("[hh-data-menu]");
    const mobileBtnClose = document.querySelector("[hh-data-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })()