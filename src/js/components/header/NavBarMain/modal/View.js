import { welcomeModal, addressModal, loginModal } from "./template.js";

export class ModalView {
  constructor() {}

  createWelcomeModalElement() {
    const welcomeModalElement = document.createElement("div");
    welcomeModalElement.classList.add("welcome-modal");
    welcomeModalElement.innerHTML = `${welcomeModal.template()}`;
    return welcomeModalElement;
  }

  createAddressModalElement() {
    const addressModalElement = document.createElement("div");
    addressModalElement.classList.add("address-modal");
    addressModalElement.innerHTML = `${addressModal.template()}`;
    return addressModalElement;
  }

  createLoginModalElement() {
    const loginModalElement = document.createElement("div");
    loginModalElement.classList.add("login-modal");
    loginModalElement.innerHTML = `${loginModal.template()}`;
    return loginModalElement;
  }
}
