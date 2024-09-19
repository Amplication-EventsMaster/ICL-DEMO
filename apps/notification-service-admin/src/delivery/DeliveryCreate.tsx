import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { MessageTitle } from "../message/MessageTitle";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="response" multiline source="response" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
