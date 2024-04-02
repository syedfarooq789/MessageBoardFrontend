import { ChannelTextProps } from "../../../types";
import { CiHashtag } from "react-icons/ci";

export const ChannelText = ({
  channel,
  onClick,
  isActive,
}: ChannelTextProps) => {
  const handleClick = () => {
    if (!isActive) {
      onClick();
    }
  };
  return (
    <div
      className={`${
        isActive ? "bg-blue-500 text-white" : " text-gray-300 hover:bg-gray-700"
      } p-5 flex items-center gap-2 rounded-md cursor-pointer mr-4`}
      onClick={handleClick}
    >
      <CiHashtag data-testid='ci-hashtag-icon' />
      {channel.name}
    </div>
  );
};
