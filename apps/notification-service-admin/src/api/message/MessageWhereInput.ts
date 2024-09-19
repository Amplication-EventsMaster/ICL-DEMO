import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  body?: StringNullableFilter;
  channel?: ChannelWhereUniqueInput;
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  template?: TemplateWhereUniqueInput;
};
