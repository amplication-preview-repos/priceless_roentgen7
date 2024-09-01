import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { BookTitle } from "../book/BookTitle";
import { UserTitle } from "../user/UserTitle";

export const LoanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
