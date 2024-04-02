"use client";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";

export const MessageList = observer(() => {
  const { messageStore } = useStores();
  const messages = messageStore.channelsMessagesMap.get(
    messageStore.selectedChannelForMessage
  );
  return (
    <div className='flex h-[90vh] flex-grow-0 overflow-y-auto'>
      {messages && messages.length === 0 ? (
        <div className='flex items-center justify-center flex-1 px-5 py-10'>
          <p className='text-white text-center'>No messages found</p>
        </div>
      ) : (
        <div className='flex-1 px-5 py-10 '>
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                className={`py-4 rounded-lg p-2 mb-2 break-all ${
                  index % 2 === 0 ? "bg-blue-400" : "bg-blue-600"
                }`}
                style={{ minWidth: "50" }}
              >
                {message.content}
              </div>
            ))}
        </div>
      )}
    </div>
  );
});
