import React from "react";
import { render } from "@testing-library/react";
import { ChannelList } from "../../app/ui/channel/channel-list";

jest.mock("../../app/store", () => ({
  useStores: jest.fn(() => ({
    messageStore: {
      channelsMessagesMap: new Map(),
      addMessages: jest.fn(),
    },
    channelStore: {
      channels: [
        { id: "1", name: "Channel 1" },
        { id: "2", name: "Channel 2" },
      ],
    },
  })),
}));

jest.mock("../../app/server-actions", () => ({
  ChannelMessageAction: jest.fn(() => []),
}));

jest.mock("../../app/ui/channel/channel-text", () => ({
  ChannelText: jest.fn(({ onClick }) => (
    <button onClick={onClick}>Mock ChannelText</button>
  )),
}));

describe("ChannelList Component", () => {
  test("renders ChannelText components for each channel", () => {
    const { container } = render(<ChannelList />);
    const channelTextElements = container.querySelectorAll("button");
    expect(channelTextElements).toHaveLength(2);
  });
});
