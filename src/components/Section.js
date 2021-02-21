export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }

  set items(items) {
    this._items = items;
  }

  addItem(item) {
    this._container.append(item);
  }

  addItemAsFirst(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }
}
