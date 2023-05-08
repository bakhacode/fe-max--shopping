import { DimModel } from "./Model.js";
import { DimView } from "./View.js";

export class DimIntent {
  constructor(parentModel, parentIntent) {
    this.parentModel = parentModel;
    this.parentIntent = parentIntent;
    this.model = new DimModel();
    this.view = new DimView();
  }

  showDim() {
    this.model.setDimVisible(true);
    this.updateDim();
  }

  hideDim() {
    this.model.setDimVisible(false);
    this.updateDim();
  }

  updateDim() {
    const main = document.querySelector("main");
    if (this.model.state.dimVisible) {
      const dimElement = this.view.createDimElement();
      main.appendChild(dimElement);
    } else {
      const dimElement = document.querySelector(".dim");
      dimElement.classList.add("fadeout");
      dimElement.addEventListener("animationend", () => {
        main.removeChild(dimElement);
      });
    }
  }
}
