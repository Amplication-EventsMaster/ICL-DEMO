import { Channel as TChannel } from "../api/channel/Channel";

export const CHANNEL_TITLE_FIELD = "typeField";

export const ChannelTitle = (record: TChannel): string => {
  return record.typeField?.toString() || String(record.id);
};
