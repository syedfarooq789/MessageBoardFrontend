import { User } from "./user";
import { ChannelList } from "./channel-list";

export const Channel = () => {
  return (
    <div className='sticky top-[40px] bottom-[40px] border-r-2 border-white h-full '>
      <div className='flex items-center gap-[20px] mb-[20px] '>
        <User data-testid='user-component'></User>
      </div>
      <div className='[list-style:none] overflow-y-auto '>
        <ChannelList></ChannelList>
      </div>
    </div>
  );
};
