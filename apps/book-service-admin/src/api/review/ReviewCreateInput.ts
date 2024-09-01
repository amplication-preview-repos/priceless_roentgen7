import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  book?: BookWhereUniqueInput | null;
  comment?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
