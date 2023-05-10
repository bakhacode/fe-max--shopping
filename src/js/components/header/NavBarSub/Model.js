export class NavSubModel {
  constructor() {
    this.state = this.initState();
  }

  initState() {
    return {
      isSideBarOn: false,
    };
  }
}
