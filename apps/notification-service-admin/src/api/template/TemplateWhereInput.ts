import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type TemplateWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
};
