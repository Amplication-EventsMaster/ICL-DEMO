import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DeliveryWhereInput = {
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  response?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  status?: "Option1";
};
