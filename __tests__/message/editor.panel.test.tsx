import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { EditorPanel } from "../../app/ui/editor-panel";
import { SetMessageAction } from "../../app/server-actions";

jest.mock("../../app/store", () => ({
  useStores: jest.fn(() => ({
    messageStore: {
      selectedChannelForMessage: "channelId",
      addMessage: jest.fn(),
    },
  })),
}));

jest.mock("../../app/server-actions", () => ({
  SetMessageAction: jest.fn(),
}));

describe("editor panel component", () => {
  test("renders message input form", () => {
    const { getByPlaceholderText } = render(<EditorPanel />);
    const inputElement = getByPlaceholderText("Type your message...");
    expect(inputElement).toBeInTheDocument();
  });

  test("allows user to type in the input field", () => {
    const { getByPlaceholderText } = render(<EditorPanel />);
    const inputElement = getByPlaceholderText(
      "Type your message..."
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toBe("Hello");
  });

  test("calls sendMessage function with correct arguments when send button is clicked", async () => {
    const { getByText, getByPlaceholderText } = render(<EditorPanel />);
    const sendButton = getByText("Send");
    const inputElement = getByPlaceholderText("Type your message...");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(SetMessageAction).toHaveBeenCalledWith("channelId", "Hello");
    });
  });
});
