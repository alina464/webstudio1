(() => {
	const refs = {
	  openModalBtn: document.querySelector("[data-open-modal]"),
	  closeModalBtn: document.querySelector("[data-close-modal]"),
	  modal: document.querySelector("[data-modal]"),
	  modalBackdrop: document.querySelector("[data-modal]"),
	};

	refs.modal.addEventListener("transitionend", () => {
		if (!refs.modal.classList.contains("show")) {
		  refs.modalBackdrop.classList.add("is-hidden");
		}
	  });
  
	refs.openModalBtn.addEventListener("click", openModal);
	refs.closeModalBtn.addEventListener("click", closeModal);
  
	function openModal() {
	  refs.modal.classList.remove("is-hidden");
  
	  // Трішки почекати і додати клас show, щоб анімація спрацювала
	  requestAnimationFrame(() => {
		refs.modal.classList.add("show");
	  });
  
	  document.body.classList.add("no-scroll");
	}
  
	function closeModal() {
	  refs.modal.classList.remove("show");
  
	  // Почекати завершення анімації і сховати модалку
	  setTimeout(() => {
		refs.modal.classList.add("is-hidden");
	  }, 500); // має співпадати з transition
	  document.body.classList.remove("no-scroll");
	}
  })();