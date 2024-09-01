import { LoanCreateNestedManyWithoutBooksInput } from "./LoanCreateNestedManyWithoutBooksInput";
import { ReviewCreateNestedManyWithoutBooksInput } from "./ReviewCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  author?: string | null;
  isbn?: string | null;
  loans?: LoanCreateNestedManyWithoutBooksInput;
  publishedDate?: Date | null;
  reviews?: ReviewCreateNestedManyWithoutBooksInput;
  title?: string | null;
};
