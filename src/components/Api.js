export default class Api {
  constructor({url, token}) {
    this._url = url;
    this._headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };
  }
}
