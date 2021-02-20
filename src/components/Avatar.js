export default class Avatar {
  constructor(avatarSelector) {
    this._avatarEl = document.querySelector(avatarSelector);
  }

  getSrc() {
    return this._avatarEl.src;
  }

  setSrc(src) {
    this._avatarEl.src = src;
  }
}
