import { Book } from "../book/Book";
import { User } from "../user/User";

export type Loan = {
  book?: Book | null;
  createdAt: Date;
  id: string;
  loanDate: Date | null;
  returnDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
