export const searchBarModal = {
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
