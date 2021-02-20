export default class UserInfo {
  constructor({nameSelector, bioSelector}) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(bioSelector);
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
}
