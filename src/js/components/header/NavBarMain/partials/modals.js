export { welcomeModal, addressModal, loginModal, searchBarModal };

const welcomeModal = {
  template() {
    return `
      <div class="welcome-modal__rectangle"></div>
      <div class="welcome-modal__content">
        <button class="welcome-modal__button">로그인</button>
        <div class="welcome-modal__caption">
          <div>기존 사용자가 아니십니까?</div>
          <a>여기에서 시작합니다.</a>
        </div>
      </div>
    `;
  },
};

const addressModal = {
  template() {
    return `
      <div class="address-modal__rectangle"></div>
      <div class="address-modal__content">
        <div>
          KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을
          보려면 배송 주소를 변경하십시오.
        </div>
        <div class="address-modal__button-container">
          <button class="address-modal__button1">계속</button>
          <button class="address-modal__button2">주소 변경</button>
        </div>
      </div>
    `;
  },
};

const loginModal = {
  template() {
    return `
      <div class="login-modal__rectangle"></div>
      <div class="login-modal__content">
          <button class="login-modal__button">로그인</button>
          <div class="login-modal__caption">
            <div>기존 사용자가 아니십니까?</div>
            <a>여기에서 시작합니다.</a>
          </div>
          <div class="login-modal__border-line"></div>
          <div class="login-modal__category">
            <div class="item-container1">
              <div class="login-modal__category-name">귀하의 목록</div>
              <div>목록 생성</div>
              <div>목록 또는 레지스트리 찾기</div>
              <div>AmazonSmile 자선 품목 목록</div>
            </div>
            <div class="item-container2">
              <div class="login-modal__category-name">계정</div>
              <div>계정</div>
              <div>주문</div>
              <div>권장 사항</div>
              <div>검색 기록</div>
              <div>워치리스트</div>
              <div>비디오 구매 및 대여</div>
              <div>Kindle 언리미티드</div>
              <div>콘텐츠 및 기기</div>
              <div>항목 구독 및 저장</div>
              <div>멤버십 및 구독</div>
              <div>음악 라이브러리</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

const searchBarModal = {
  suggestedSearchTerms: [
    "egift cards for amazon gift card",
    "marvel legends",
    "gift cards",
    "amazon reload",
    "reloadable visa gift cards",
    "scorpions cd",
    "reload gift card",
    "reload",
    "blue note tone poet vinyl",
    "balance reload",
  ],

  autoCompletedTerms: [
    "자동차 점프 스타터",
    "강아지 자동급식기",
    "고양이 자동급식기",
    "자동차 장난감",
    "자동차 용품",
    "자동 연필깎이",
    "자동차 컴파운드 흠집 제거제",
    "두잇 자동급식기",
    "자동차 보조배터리",
    "자동차 타이어 공기주입기",
  ],

  recentSearchesTemp(state) {
    return `
      ${state.recentSearches
        .map(
          (searchTerm) => `
          <div class ="recent-search">
            <div class="text">${searchTerm}</div>
            <img class="delete-btn" src="/src/assets/img/search-close.svg" />
          </div>`
        )
        .join("")}
    `;
  },

  suggestedTemp() {
    const { suggestedSearchTerms } = this;
    return `
      ${suggestedSearchTerms
        .map(
          (searchTerm) => `
          <div>
            <img src="/src/assets/img/search-symbol.svg">
            <div class="text">${searchTerm}</div>
          </div>`
        )
        .join("")}
    `;
  },

  autoCompletedTemp(state) {
    const { autoCompletedTerms } = this;
    return `
      ${autoCompletedTerms
        .map((term) => {
          if (term.includes(state.inputValue)) {
            const highlightedTerm = term.replace(
              new RegExp(state.inputValue, "gi"),
              `<span>${state.inputValue}</span>`
            );
            return `
            <div id="autoSearchTerms">
              <div class="text">${term}</div>
              <div>
                ${highlightedTerm}
              </div>
            </div>`;
          }
        })
        .join("")}
      `;
  },

  template(state) {
    return `
    ${state.recentSearches ? this.recentSearchesTemp(state) : ""}
    ${state.inputValue ? this.autoCompletedTemp(state) : ""}
    ${state.inputSuggested ? this.suggestedTemp() : ""}
    `;
  },
};
