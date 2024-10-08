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
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDeliveryStatus } from "./EnumDeliveryStatus";

@InputType()
class DeliveryCreateInput {
  @ApiProperty({
    required: false,
    type: () => MessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereUniqueInput)
  @IsOptional()
  @Field(() => MessageWhereUniqueInput, {
    nullable: true,
  })
  message?: MessageWhereUniqueInput | null;

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
  response?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  sentAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryStatus,
  })
  @IsEnum(EnumDeliveryStatus)
  @IsOptional()
  @Field(() => EnumDeliveryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DeliveryCreateInput as DeliveryCreateInput };
