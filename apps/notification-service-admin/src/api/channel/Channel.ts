import { JsonValue } from "type-fest";
import { Message } from "../message/Message";

export type Channel = {
  configField: JsonValue;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  typeField: string | null;
  updatedAt: Date;
};
