export class NavSubView {
  constructor(rootElement) {
    this.navBarSub = this.createNavBarSubElement();
    this.render();
  }

  render() {
    const navBar = document.querySelector(".nav-bar");
    navBar.appendChild(this.navBarSub);
  }

  createNavBarSubElement() {
    const navBarSub = document.createElement("div");
    navBarSub.classList.add("nav-bar__sub");
    navBarSub.innerHTML = `
      <div class="menu-container">
        <div class="side-bar">
          <img src="/src/assets/img/side-bar.svg" />
          <div>모두</div>
        </div>
        <!-- <div class="menu-item"> -->
          <div>오늘의 딜</div>
          <div>고객 서비스</div>
          <div>레지스트리</div>
          <div>기프트 카드</div>
          <div>판매</div>
        <!-- </div> -->
      </div>
      <div>지금 특가 상품 쇼핑하기</div>
      `;
    return navBarSub;
  }
}
