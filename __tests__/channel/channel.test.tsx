import React from "react";
import { render } from "@testing-library/react";
import { Channel } from "../../app/ui/channel/channel";
import { ChannelList } from "../../app/ui/channel/channel-list";

jest.mock("../../app/ui/channel/channel-list", () => ({
  __esModule: true,
  ChannelList: jest.fn(() => null),
}));
jest.mock("../../app/ui/channel/user", () => ({
  __esModule: true,
  User: jest.fn(() => (
    <div data-testid='user-component'>Mock User Component</div>
  )),
}));
describe("Channel Component", () => {
  test("renders User and ChannelList components", () => {
    const { queryByTestId } = render(<Channel />);
    expect(queryByTestId("user-component")).toBeInTheDocument();
    expect(ChannelList).toHaveBeenCalled();
  });

  test("applies correct CSS classes", () => {
    const { container } = render(<Channel />);
    expect(container.firstChild).toHaveClass("sticky top-[40px]");
    expect(
      container.querySelector("[class*='list-style:none']")
    ).toBeInTheDocument();
    expect(container.querySelector(".overflow-y-auto")).toBeInTheDocument();
  });
});
