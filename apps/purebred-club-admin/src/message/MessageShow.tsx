import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { AD_TITLE_FIELD } from "../ad/AdTitle";
import { BREEDER_TITLE_FIELD } from "../breeder/BreederTitle";
import { BUYER_TITLE_FIELD } from "../buyer/BuyerTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="sentAt" source="sentAt" />
        <ReferenceField label="Ad" source="ad.id" reference="Ad">
          <TextField source={AD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Breeder" source="breeder.id" reference="Breeder">
          <TextField source={BREEDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Buyer" source="buyer.id" reference="Buyer">
          <TextField source={BUYER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
