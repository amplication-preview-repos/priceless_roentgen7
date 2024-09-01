import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  bookId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loanDate?: SortOrder;
  returnDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
