import { LoanUpdateManyWithoutUsersInput } from "./LoanUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanUpdateManyWithoutUsersInput;
  password?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
