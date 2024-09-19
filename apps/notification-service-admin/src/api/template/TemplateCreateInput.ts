import { MessageCreateNestedManyWithoutTemplatesInput } from "./MessageCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  content?: string | null;
  messages?: MessageCreateNestedManyWithoutTemplatesInput;
  name?: string | null;
};
