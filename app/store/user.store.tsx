import { makeAutoObservable } from "mobx";

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  userName: string = "";

  addUserName(userName: string) {
    this.userName = userName;
  }
}
