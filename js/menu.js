(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('mobile-hidden');

    const isModalClose = refs.modal.classList.contains("mobile-hidden");
    const method = isModalClose ? "enableBodyScroll" : "disableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
})();