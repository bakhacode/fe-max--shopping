export class NavMainModel {
  constructor() {
    this.state = this.initState();
  }

  initState() {
    return {
      selectable: false,
      currentInputData: "",
      isTyping: false,
      recentSearches: [],
      currentModalSearchTerms: "",
      firstSearchTerm: "",
      lastSearchTerm: "",
      selectedSearchTerm: "",
      isSearchBarModalOpen: false,
      inputSuggested: true,
      inputValue: "",
      prevInputValue: "",
      welcomeModalVisible: false,
      addressModalVisible: false,
      loginModalVisible: false,
    };
  }

  setSelectable(value) {
    this.state.selectable = value;
  }

  setCurrentInputData(value) {
    this.state.currentInputData = value;
  }

  setIsTyping(value) {
    this.state.isTyping = value;
  }

  addRecentSearch(value) {
    this.state.recentSearches.push(value);
  }

  setInputSuggested(value) {
    this.state.inputSuggested = value;
  }

  setPrevInputValue(value) {
    this.state.prevInputValue = value;
  }

  setInputValue(value) {
    this.state.inputValue = value;
  }

  toggleSearchBarModal(value) {
    this.state.isSearchBarModalOpen = value;
  }

  setVisible(key, visible) {
    this.state[key] = visible;
  }

  setInputFocus(focused) {
    this.state.inputFocused = focused;
  }
}
