import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdTitle } from "../ad/AdTitle";
import { BreederTitle } from "../breeder/BreederTitle";
import { BuyerTitle } from "../buyer/BuyerTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <ReferenceInput source="ad.id" reference="Ad" label="Ad">
          <SelectInput optionText={AdTitle} />
        </ReferenceInput>
        <ReferenceInput source="breeder.id" reference="Breeder" label="Breeder">
          <SelectInput optionText={BreederTitle} />
        </ReferenceInput>
        <ReferenceInput source="buyer.id" reference="Buyer" label="Buyer">
          <SelectInput optionText={BuyerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};