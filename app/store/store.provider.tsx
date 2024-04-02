"use client";
import React, { createContext, ReactNode } from "react";
import store from "./root.store";
import { Channel } from "../types";

export const StoreContext = createContext(store);

export const StoreProvider = ({
  children,
  channels,
}: {
  children: ReactNode;
  channels: Channel[];
}) => {
  store.channelStore.hydrate(channels);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
