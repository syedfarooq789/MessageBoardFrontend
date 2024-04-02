"use server";
import { fetchMessages } from "../utils";

export const ChannelMessageAction = async (channelId: string) => {
  const messages = await fetchMessages(channelId);
  return messages;
};
