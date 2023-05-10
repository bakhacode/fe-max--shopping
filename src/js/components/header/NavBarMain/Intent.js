import { DimIntent } from "../../dim/Intent.js";
import { NavMainModel } from "./Model.js";
import { NavMainView } from "./View.js";

//
import { ModalIntent } from "../NavBarMain/modal/Intent.js";
import { SearchBarIntent } from "../NavBarMain/searchbar/Intent.js";

export class NavMainIntent {
  constructor() {
    this.initNavMainView = new NavMainView();
    this.initModalIntent = new ModalIntent();
    this.initSearchBarIntent = new SearchBarIntent();
  }
}
