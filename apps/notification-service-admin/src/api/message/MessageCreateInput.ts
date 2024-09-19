import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutMessagesInput } from "./DeliveryCreateNestedManyWithoutMessagesInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  body?: string | null;
  channel?: ChannelWhereUniqueInput | null;
  deliveries?: DeliveryCreateNestedManyWithoutMessagesInput;
  status?: "Option1" | null;
  subject?: string | null;
  template?: TemplateWhereUniqueInput | null;
};
