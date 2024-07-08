/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BreederWhereInput } from "./BreederWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BreederOrderByInput } from "./BreederOrderByInput";

@ArgsType()
class BreederFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BreederWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BreederWhereInput, { nullable: true })
  @Type(() => BreederWhereInput)
  where?: BreederWhereInput;

  @ApiProperty({
    required: false,
    type: [BreederOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BreederOrderByInput], { nullable: true })
  @Type(() => BreederOrderByInput)
  orderBy?: Array<BreederOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BreederFindManyArgs as BreederFindManyArgs };
