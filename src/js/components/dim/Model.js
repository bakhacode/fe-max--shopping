export class DimModel {
  constructor() {
    this.state = {
      dimVisible: false,
    };
  }

  setDimVisible(visible) {
    this.state.dimVisible = visible;
  }
}
