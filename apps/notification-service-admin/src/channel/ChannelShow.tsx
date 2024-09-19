import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHANNEL_TITLE_FIELD } from "./ChannelTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const ChannelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="config" source="configField" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="channelId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="body" source="body" />
            <ReferenceField
              label="Channel"
              source="channel.id"
              reference="Channel"
            >
              <TextField source={CHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="subject" source="subject" />
            <ReferenceField
              label="Template"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
