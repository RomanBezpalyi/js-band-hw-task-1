import Truck from "./classes/truck";
import Ship from "./classes/ship";
import Cost from "./classes/cost";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.getItemsFromLS();
    this.view.init(this.model.trucks, this.model.ships, this.model.costs);

    this.view.on("add", this.addItem.bind(this));
  }

  showAllItems() {
    const { trucks, ships, costs } = this.model;
    this.view.init(trucks, ships, costs);
  }

  addItem(item) {
    let listType;
    if (item instanceof Truck) listType = "trucks";
    if (item instanceof Ship) listType = "ships";
    if (item instanceof Cost) listType = "costs";

    this.model.addItem(item, listType);
    try {
      localStorage.setItem(`${listType}`, JSON.stringify(this.model[listType]));
    } catch (e) {
      console.error("Error while parsing.");
    }
    this.showAllItems();
  }
}
