import { Channel } from "../channel/Channel";
import { Delivery } from "../delivery/Delivery";
import { Template } from "../template/Template";

export type Message = {
  body: string | null;
  channel?: Channel | null;
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  status?: "Option1" | null;
  subject: string | null;
  template?: Template | null;
  updatedAt: Date;
};
