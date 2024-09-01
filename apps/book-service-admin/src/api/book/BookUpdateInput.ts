import { LoanUpdateManyWithoutBooksInput } from "./LoanUpdateManyWithoutBooksInput";
import { ReviewUpdateManyWithoutBooksInput } from "./ReviewUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  author?: string | null;
  isbn?: string | null;
  loans?: LoanUpdateManyWithoutBooksInput;
  publishedDate?: Date | null;
  reviews?: ReviewUpdateManyWithoutBooksInput;
  title?: string | null;
};
