import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChannelWhereInput = {
  configField?: JsonFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  typeField?: StringNullableFilter;
};
