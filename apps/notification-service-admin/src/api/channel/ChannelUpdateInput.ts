import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutChannelsInput } from "./MessageUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  configField?: InputJsonValue;
  messages?: MessageUpdateManyWithoutChannelsInput;
  typeField?: string | null;
};
