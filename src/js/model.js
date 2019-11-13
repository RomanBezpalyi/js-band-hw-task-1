export default class Model {
  constructor(vehicles = [], costs = []) {
    this.vehicles = vehicles;
    this.costs = costs;
  }

  getItemsFromLS() {
    try {
      if (localStorage.vehicles)
        this.vehicles = JSON.parse(localStorage.getItem("vehicles"));
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
