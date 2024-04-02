import { makeAutoObservable } from "mobx";
import type { Message } from "../types";

export class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }

  channelsMessagesMap: Map<string, Message[]> = new Map();

  selectedChannelForMessage: string = "";

  addMessages(channelId: string, messages: Message[]) {
    this.channelsMessagesMap.set(channelId, []);
    this.selectedChannelForMessage = channelId;
    const existingMessages = this.channelsMessagesMap.get(channelId) || [];
    const updatedMessages = [...existingMessages, ...messages];
    this.channelsMessagesMap.set(channelId, updatedMessages);
  }

  addMessage(channelId: string, message: Message) {
    this.selectedChannelForMessage = channelId;
    const messages = this.channelsMessagesMap.get(channelId) || [];
    messages.push(message);
    this.channelsMessagesMap.set(channelId, messages);
  }
}
