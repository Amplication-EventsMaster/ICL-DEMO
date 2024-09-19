import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { DeliveryUpdateManyWithoutMessagesInput } from "./DeliveryUpdateManyWithoutMessagesInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  body?: string | null;
  channel?: ChannelWhereUniqueInput | null;
  deliveries?: DeliveryUpdateManyWithoutMessagesInput;
  status?: "Option1" | null;
  subject?: string | null;
  template?: TemplateWhereUniqueInput | null;
};
