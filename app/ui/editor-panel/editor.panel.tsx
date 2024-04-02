"use client";

import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { useStores } from "../../store";
import { Message } from "../../types";
import { observer } from "mobx-react-lite";
import { SetMessageAction } from "../../server-actions";

export const EditorPanel = observer(() => {
  const { messageStore } = useStores();
  const [messageContent, setMessageContent] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageContent(event.target.value);
  };

  useEffect(() => {
    setMessageContent("");
  }, [messageStore.selectedChannelForMessage]);

  const sendMessage = async (
    event: MouseEvent<HTMLButtonElement>,
    channelId: string,
    content: string
  ) => {
    try {
      event.preventDefault();
      if (!content.trim()) {
        return;
      }
      const message: Message = { id: channelId, content: content };
      messageStore.addMessage(channelId, message);
      await SetMessageAction(channelId, content);
      setMessageContent("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const isSubmitDisabled = !messageContent.trim();

  return (
    <>
      {messageStore.selectedChannelForMessage && (
        <form className='flex items-center sticky bottom-0 left-0 right-0 p-3 border-t border-gray-300'>
          <input
            type='text'
            value={messageContent}
            onChange={handleInputChange}
            placeholder='Type your message...'
            className='flex-1 px-2 py-2 border border-gray-300 rounded mr-10 text-black'
          />
          <button
            disabled={isSubmitDisabled}
            onClick={(event) =>
              sendMessage(
                event,
                messageStore.selectedChannelForMessage,
                messageContent
              )
            }
            className={`px-6 py-2 bg-blue-500 text-white rounded ${
              isSubmitDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            Send
          </button>
        </form>
      )}
    </>
  );
});
