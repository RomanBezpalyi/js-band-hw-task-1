export default class Model {
  constructor(trucks = [], ships = [], costs = []) {
    this.trucks = trucks;
    this.ships = ships;
    this.costs = costs;
  }

  getItemsFromLS() {
    try {
      if (localStorage.trucks)
        this.trucks = JSON.parse(localStorage.getItem("trucks"));
      if (localStorage.ships)
        this.ships = JSON.parse(localStorage.getItem("ships"));
      if (localStorage.costs)
        this.costs = JSON.parse(localStorage.getItem("costs"));
    } catch (e) {
      console.error("Error while parsing.");
    }
  }

  addItem(item, list) {
    this[list].push(item);
    return item;
  }
}
