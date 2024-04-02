import { ChannelStore } from "./channel.store";
import { MessageStore } from "./message.store";
import { UserStore } from "./user.store";
const channelStore = new ChannelStore();
const messageStore = new MessageStore();
const userStore = new UserStore();

const RootStore = {
  channelStore,
  messageStore,
  userStore,
};

export default RootStore;
