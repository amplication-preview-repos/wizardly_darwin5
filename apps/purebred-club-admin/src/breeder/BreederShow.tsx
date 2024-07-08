import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AD_TITLE_FIELD } from "../ad/AdTitle";
import { BREEDER_TITLE_FIELD } from "./BreederTitle";
import { BUYER_TITLE_FIELD } from "../buyer/BuyerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BreederShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="profilePhoto" source="profilePhoto" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Message"
          target="breederId"
          label="Messages"
        >
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
