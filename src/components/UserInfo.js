export default class UserInfo {
  constructor({nameSelector, bioSelector, avatarSelector}) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(bioSelector);
    this._avatarEl = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameEl.textContent,
      about: this._aboutEl.textContent
    };
  }

  setUserInfo({ name, about }) {
    this._nameEl.textContent = name;
    this._aboutEl.textContent = about;
  }

  getAvatarSrc() {
    return this._avatarEl.src;
  }

  setAvatarSrc(src) {
    this._avatarEl.src = src;
  }
}
