/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BreederWhereUniqueInput } from "../../breeder/base/BreederWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BreederCreateNestedManyWithoutUsersInput {
  @Field(() => [BreederWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BreederWhereUniqueInput],
  })
  connect?: Array<BreederWhereUniqueInput>;
}

export { BreederCreateNestedManyWithoutUsersInput as BreederCreateNestedManyWithoutUsersInput };