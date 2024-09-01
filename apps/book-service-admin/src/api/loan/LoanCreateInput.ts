import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanCreateInput = {
  book?: BookWhereUniqueInput | null;
  loanDate?: Date | null;
  returnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
