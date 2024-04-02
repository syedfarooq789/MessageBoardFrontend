import React from "react";
import { render } from "@testing-library/react";
import { MessageList } from "../../app/ui/message-list/message.list";

jest.mock("../../app/store", () => ({
  useStores: jest.fn(() => ({
    messageStore: {
      channelsMessagesMap: new Map([
        ["channelId", [{ id: "1", content: "Message 1" }]],
      ]),
      selectedChannelForMessage: "channelId",
    },
  })),
}));
jest.mock("../../app/server-actions", () => ({
  SetMessageAction: jest.fn(),
}));

describe("Message Component", () => {
  test("renders messages correctly", () => {
    const { getByText } = render(<MessageList />);
    expect(getByText("Message 1")).toBeInTheDocument();
  });
});
