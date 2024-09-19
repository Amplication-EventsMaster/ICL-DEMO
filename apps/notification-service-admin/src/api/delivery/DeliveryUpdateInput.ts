import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type DeliveryUpdateInput = {
  message?: MessageWhereUniqueInput | null;
  response?: string | null;
  sentAt?: Date | null;
  status?: "Option1" | null;
};
