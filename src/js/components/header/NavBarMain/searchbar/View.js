import { searchBarModal } from "./template.js";

export class SearchBarView {
  constructor() {}

  renderSearchBarModalElement(state) {
    return `${searchBarModal.template(state)}`;
  }
}
