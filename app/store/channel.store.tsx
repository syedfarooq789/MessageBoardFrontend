import { makeAutoObservable } from "mobx";
import { Channel } from "../types";

export class ChannelStore {
  channels: Channel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  hydrate = (channels: Channel[]) => {
    this.channels = channels;
  };
  setChannels = (channels: Channel[]) => {
    this.channels = channels;
  };
}
