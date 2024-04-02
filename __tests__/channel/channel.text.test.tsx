import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ChannelText } from "../../app/ui/channel/channel-text";
import { ChannelTextProps } from "../../app/types";

const mockOnClick = jest.fn();

describe("ChannelText Component", () => {
  const channel: ChannelTextProps["channel"] = {
    id: "channel-id",
    name: "Channel Name",
  };

  test("renders channel name and CiHashtag icon", () => {
    const { getByText, getByTestId } = render(
      <ChannelText channel={channel} onClick={mockOnClick} isActive={false} />
    );
    expect(getByTestId("ci-hashtag-icon")).toBeInTheDocument();
    expect(getByText("Channel Name")).toBeInTheDocument();
  });

  test("applies correct background color and text color when inactive", () => {
    const { container } = render(
      <ChannelText channel={channel} onClick={mockOnClick} isActive={false} />
    );
    expect(container.firstChild).toHaveClass("text-gray-300 hover:bg-gray-700");
  });

  test("applies correct background color and text color when active", () => {
    const { container } = render(
      <ChannelText channel={channel} onClick={mockOnClick} isActive={true} />
    );
    expect(container.firstChild).toHaveClass("bg-blue-500 text-white");
  });

  test("calls onClick function when clicked if not active", () => {
    const { container } = render(
      <ChannelText channel={channel} onClick={mockOnClick} isActive={false} />
    );
    const element = container.firstChild as Element;
    fireEvent.click(element);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
