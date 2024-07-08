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

import { AD_TITLE_FIELD } from "./AdTitle";
import { BREEDER_TITLE_FIELD } from "../breeder/BreederTitle";
import { BUYER_TITLE_FIELD } from "../buyer/BuyerTitle";

export const AdShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="breed" source="breed" />
        <TextField label="type" source="typeField" />
        <TextField label="color" source="color" />
        <TextField label="weight" source="weight" />
        <TextField label="tests" source="tests" />
        <TextField label="photos" source="photos" />
        <TextField label="publicationStartDate" source="publicationStartDate" />
        <TextField label="publicationEndDate" source="publicationEndDate" />
        <TextField label="status" source="status" />
        <ReferenceManyField reference="Message" target="adId" label="Messages">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="sentAt" source="sentAt" />
            <ReferenceField label="Ad" source="ad.id" reference="Ad">
              <TextField source={AD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Breeder"
              source="breeder.id"
              reference="Breeder"
            >
              <TextField source={BREEDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Buyer" source="buyer.id" reference="Buyer">
              <TextField source={BUYER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
