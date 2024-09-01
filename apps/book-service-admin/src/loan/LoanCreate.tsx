import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BookTitle } from "../book/BookTitle";
import { UserTitle } from "../user/UserTitle";

export const LoanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Book" label="book">
          <SelectInput optionText={BookTitle} />
        </ReferenceInput>
        <DateTimeInput label="loanDate" source="loanDate" />
        <DateTimeInput label="returnDate" source="returnDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
