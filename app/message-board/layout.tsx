import { ReactNode } from "react";
import { MessageList } from "../ui/message-list/message.list";
import { Channel } from "../ui/channel/channel";
import { NameDialog } from "../ui/name-dialog/name.dialog";
import { EditorPanel } from "../ui/editor-panel";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col h-screen overflow-y-auto'>
      <div className='flex-1 flex'>
        <div className='w-2/10 p-4 min-h-screen'>
          <NameDialog />
          <Channel />
        </div>
        <div className='w-3/4 p-4 relative flex flex-col'>
          <div className='flex-grow overflow-y-auto'>
            <MessageList />
          </div>
          <div className='py-1 flex-shrink-0'>
            <EditorPanel />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
