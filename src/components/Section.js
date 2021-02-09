export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }
}