export default class UserInfo {
  constructor({nameSelector, bioSelector}) {
    this._nameEl = document.querySelector(nameSelector);
    this._bioEl = document.querySelector(bioSelector);
  }

  getUserInfo() {
    return {name: this._nameEl.textContent, bio: this._bioEl.textContent}
  }

  setUserInfo({ name, bio }) {
    this._nameEl.textContent = name;
    this._bioEl.textContent = bio;
  }
}
