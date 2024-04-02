import "./ui/global.css";
import { ReactNode } from "react";
import { StoreProvider } from "./store";
import { fetchChannels } from "./utils";

export const metadata = {
  title: "Channel Message Prototype",
  description: "Build using Nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const channels = await fetchChannels();
  return (
    <html lang='en' className='bg-gray-900 text-white'>
      <body className='bg-bg text-text'>
        <StoreProvider channels={channels}>{children}</StoreProvider>
      </body>
    </html>
  );
}
