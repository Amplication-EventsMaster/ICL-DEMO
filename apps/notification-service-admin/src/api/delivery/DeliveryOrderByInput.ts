import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  response?: SortOrder;
  sentAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
