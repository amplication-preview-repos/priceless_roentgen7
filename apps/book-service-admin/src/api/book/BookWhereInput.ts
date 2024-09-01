import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  isbn?: StringNullableFilter;
  loans?: LoanListRelationFilter;
  publishedDate?: DateTimeNullableFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
};
