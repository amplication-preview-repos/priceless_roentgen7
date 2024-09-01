import { Loan } from "../loan/Loan";
import { Review } from "../review/Review";

export type Book = {
  author: string | null;
  createdAt: Date;
  id: string;
  isbn: string | null;
  loans?: Array<Loan>;
  publishedDate: Date | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
};
