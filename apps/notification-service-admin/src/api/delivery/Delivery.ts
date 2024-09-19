import { Message } from "../message/Message";

export type Delivery = {
  createdAt: Date;
  id: string;
  message?: Message | null;
  response: string | null;
  sentAt: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
