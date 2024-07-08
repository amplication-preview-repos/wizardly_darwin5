import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
