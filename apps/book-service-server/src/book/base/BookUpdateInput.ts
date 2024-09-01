/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { LoanUpdateManyWithoutBooksInput } from "./LoanUpdateManyWithoutBooksInput";
import { Type } from "class-transformer";
import { ReviewUpdateManyWithoutBooksInput } from "./ReviewUpdateManyWithoutBooksInput";

@InputType()
class BookUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  isbn?: string | null;

  @ApiProperty({
    required: false,
    type: () => LoanUpdateManyWithoutBooksInput,
  })
  @ValidateNested()
  @Type(() => LoanUpdateManyWithoutBooksInput)
  @IsOptional()
  @Field(() => LoanUpdateManyWithoutBooksInput, {
    nullable: true,
  })
  loans?: LoanUpdateManyWithoutBooksInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutBooksInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutBooksInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutBooksInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutBooksInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { BookUpdateInput as BookUpdateInput };
