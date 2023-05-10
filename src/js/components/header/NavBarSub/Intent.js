import { DimIntent } from "../../dim/Intent.js";
import { NavSubModel } from "./Model.js";
import { NavSubView } from "./View.js";

export class NavSubIntent {
  constructor() {
    this.model = new NavSubModel();
    this.view = new NavSubView();
    this.dimIntent = new DimIntent(this.model, this);
  }
}
