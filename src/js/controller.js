import Cost from "./classes/cost";
import collectionTypes from "./constants/collectionTypes";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.getItemsFromLS();
    this.view.init(this.model.vehicles, this.model.costs);

    this.view.on("add", this.addItem.bind(this));
  }

  showAllItems() {
    const { vehicles, costs } = this.model;
    this.view.init(vehicles, costs);
  }

  addItem(item) {
    const listType =
      item instanceof Cost ? collectionTypes.COSTS : collectionTypes.VEHICLES;

    this.model.addItem(item, listType);
    try {
      localStorage.setItem(`${listType}`, JSON.stringify(this.model[listType]));
    } catch (e) {
      console.error("Error while parsing.");
    }
    this.showAllItems();
  }
}
