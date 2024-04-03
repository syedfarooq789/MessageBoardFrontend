import { Channel } from "./channel";

export type ChannelTextProps = {
  channel: Channel;
  onClick: () => void;
  isActive: boolean;
};
