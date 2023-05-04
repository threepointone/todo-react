import { getYjsValue, syncedStore } from "@syncedstore/core";
import { WebsocketProvider } from "y-partykit/provider";

export type Todo = {
  title: string;
  completed: boolean;
};

export const globalStore = syncedStore({ todos: [] as Todo[] });

// new WebsocketProvider(
//   "wss://yjs.threepointone.partykit.dev/party",
//   "lwj",
//   getYjsValue(globalStore) as any
// ); // sync via partykit
