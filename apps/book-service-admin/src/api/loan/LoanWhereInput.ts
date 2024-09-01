import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanWhereInput = {
  book?: BookWhereUniqueInput;
  id?: StringFilter;
  loanDate?: DateTimeNullableFilter;
  returnDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
