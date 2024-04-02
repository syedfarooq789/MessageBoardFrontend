"use client";

import { Channel } from "../../../types";
import { ChannelText } from "../channel-text";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ChannelMessageAction } from "../../../server-actions";

export const ChannelList = observer(() => {
  const { messageStore, channelStore } = useStores();
  const [activeChannelId, setActiveChannelId] = useState<string>("");

  const onSubmit = async (channelId: string) => {
    try {
      if (!messageStore.channelsMessagesMap.has(channelId)) {
        const result = await ChannelMessageAction(channelId);
        messageStore.addMessages(channelId, result);
      } else {
        const messages = messageStore.channelsMessagesMap.get(channelId);
        if (messages) {
          messageStore.addMessages(channelId, messages);
        }
      }
      setActiveChannelId(channelId);
    } catch (error) {
      console.error("Error fetching message in component:", error);
    }
  };

  return (
    <div className='h-[80vh] overflow-y-auto'>
      <ul>
        {channelStore.channels &&
          channelStore.channels.map((channel: Channel) => (
            <div key={channel.id}>
              <ChannelText
                channel={channel}
                onClick={() => onSubmit(channel.id)}
                isActive={channel.id === activeChannelId ? true : false}
              />
            </div>
          ))}
      </ul>
    </div>
  );
});
