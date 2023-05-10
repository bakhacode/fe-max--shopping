import { DimIntent } from "../../../dim/Intent.js";
import { NavMainModel } from "../Model.js";
import { ModalView } from "./View.js";

export class ModalIntent {
  constructor() {
    this.model = new NavMainModel();
    this.view = new ModalView();
    this.dimIntent = new DimIntent(this.model, this);
    this.modalSetup();
  }

  modalSetup() {
    const addressArea = document.querySelector(".address");
    const loginArea = document.querySelector(".login");

    let timerIdForModal;
    const halfSecond = 500;

    document.addEventListener("DOMContentLoaded", () => {
      this.model.setVisible("welcomeModalVisible", true);
      this.updateWelcomeModal();
    });

    addressArea.addEventListener("mouseenter", () => {
      if (!this.model.state.addressModalVisible) {
        this.model.setVisible("addressModalVisible", true);
        this.updateAddressModal();
        this.dimIntent.showDim();
      }
      clearTimeout(timerIdForModal);
    });

    addressArea.addEventListener("mouseleave", () => {
      timerIdForModal = setTimeout(() => {
        this.model.setVisible("addressModalVisible", false);
        this.updateAddressModal();
        this.dimIntent.hideDim();
      }, halfSecond);
    });

    loginArea.addEventListener("mouseenter", () => {
      const welcomeModal = document.querySelector(".welcome-modal");
      if (welcomeModal) {
        this.model.setVisible("welcomeModalVisible", false);
        this.updateWelcomeModal();
      }
      if (!this.model.state.loginModalVisible) {
        this.model.setVisible("loginModalVisible", true);
        this.updateLoginModal();
        this.dimIntent.showDim();
      }
      clearTimeout(timerIdForModal);
    });

    loginArea.addEventListener("mouseleave", () => {
      timerIdForModal = setTimeout(() => {
        this.model.setVisible("loginModalVisible", false);
        this.updateLoginModal();
        this.dimIntent.hideDim();
      }, halfSecond);
    });
  }

  updateWelcomeModal() {
    const navBarMain = document.querySelector(".nav-bar__main");
    if (this.model.state.welcomeModalVisible) {
      const welcomeModal = this.view.createWelcomeModalElement();
      setTimeout(() => {
        navBarMain.appendChild(welcomeModal);
      }, 1000);
    } else {
      const welcomeModalElement = document.querySelector(".welcome-modal");
      if (welcomeModalElement) {
        navBarMain.removeChild(welcomeModalElement);
      }
    }
  }

  updateAddressModal() {
    const addressArea = document.querySelector(".address");
    if (this.model.state.addressModalVisible) {
      const addressModal = this.view.createAddressModalElement();
      addressArea.appendChild(addressModal);
    } else {
      const addressModalElement = document.querySelector(".address-modal");
      if (addressModalElement) {
        addressArea.removeChild(addressModalElement);
      }
    }
  }

  updateLoginModal() {
    const loginArea = document.querySelector(".login");
    if (this.model.state.loginModalVisible) {
      const loginModal = this.view.createLoginModalElement();
      loginArea.appendChild(loginModal);
    } else {
      const loginModalElement = document.querySelector(".login-modal");
      if (loginModalElement) {
        loginArea.removeChild(loginModalElement);
      }
    }
  }
}
