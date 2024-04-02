"use server";
import { createMessages } from "../utils";

export const SetMessageAction = async (channelId: string, content: string) => {
  const createMessage = await createMessages(channelId, content);
  return createMessage;
};
