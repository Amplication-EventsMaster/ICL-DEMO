import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChannelTitle } from "../channel/ChannelTitle";
import { DeliveryTitle } from "../delivery/DeliveryTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <ReferenceInput source="channel.id" reference="Channel" label="Channel">
          <SelectInput optionText={ChannelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="deliveries" reference="Delivery">
          <SelectArrayInput
            optionText={DeliveryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="subject" source="subject" />
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="Template"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
