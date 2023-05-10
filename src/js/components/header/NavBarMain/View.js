import {
  addressModal,
  loginModal,
  welcomeModal,
  searchBarModal,
} from "./partials/modals.js";

export class NavMainView {
  constructor() {
    this.navBarMain = this.createNavBarMainElement();
    this.render();
  }

  render() {
    const navBar = document.querySelector(".nav-bar");
    navBar.appendChild(this.navBarMain);
  }

  createNavBarMainElement() {
    const navBarMain = document.createElement("div");
    navBarMain.classList.add("nav-bar__main");
    navBarMain.innerHTML = `
    <img src="src/assets/img/amazon-logo.svg" />
      <div class="address">
        <div class="subtext-container">
          <img src="src/assets/img/address.svg" />
          <div class="subtext">배송처</div>
        </div>
        <div>대한민국</div>
      </div>
      <div class='search-bar'>
        <div class="search-bar__container">
          <div class="input-container">
            <input type="text" placeholder="검색 Amazon" />
          </div>
          <img
            class="search-bar__button"
            src="src/assets/img/search-btn.svg"
          />
        </div>
      </div>
      <div class="nation">🇰🇷 KO</div>
      <div class="login">
        <div class="subtext">안녕하세요,로그인</div>
        <div>계정 및 목록</div>
      </div>
      <div class="my-page">
        <div class="subtext">반품</div>
        <div>&주문</div>
      </div>
      <div class="cart">
        <img src="src/assets/img/cart.svg" />
        <div>장바구니</div>
      </div>
    `;
    return navBarMain;
  }

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

  renderSearchBarModalElement(state) {
    return `${searchBarModal.template(state)}`;
  }
}
