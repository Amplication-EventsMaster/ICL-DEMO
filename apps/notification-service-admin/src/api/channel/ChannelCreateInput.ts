import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutChannelsInput } from "./MessageCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  configField?: InputJsonValue;
  messages?: MessageCreateNestedManyWithoutChannelsInput;
  typeField?: string | null;
};
