/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DeliveryService } from "../delivery.service";
import { DeliveryCreateInput } from "./DeliveryCreateInput";
import { Delivery } from "./Delivery";
import { DeliveryFindManyArgs } from "./DeliveryFindManyArgs";
import { DeliveryWhereUniqueInput } from "./DeliveryWhereUniqueInput";
import { DeliveryUpdateInput } from "./DeliveryUpdateInput";

export class DeliveryControllerBase {
  constructor(protected readonly service: DeliveryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Delivery })
  async createDelivery(
    @common.Body() data: DeliveryCreateInput
  ): Promise<Delivery> {
    return await this.service.createDelivery({
      data: {
        ...data,

        message: data.message
          ? {
              connect: data.message,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        response: true,
        sentAt: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Delivery] })
  @ApiNestedQuery(DeliveryFindManyArgs)
  async deliveries(@common.Req() request: Request): Promise<Delivery[]> {
    const args = plainToClass(DeliveryFindManyArgs, request.query);
    return this.service.deliveries({
      ...args,
      select: {
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        response: true,
        sentAt: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Delivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delivery(
    @common.Param() params: DeliveryWhereUniqueInput
  ): Promise<Delivery | null> {
    const result = await this.service.delivery({
      where: params,
      select: {
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        response: true,
        sentAt: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Delivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDelivery(
    @common.Param() params: DeliveryWhereUniqueInput,
    @common.Body() data: DeliveryUpdateInput
  ): Promise<Delivery | null> {
    try {
      return await this.service.updateDelivery({
        where: params,
        data: {
          ...data,

          message: data.message
            ? {
                connect: data.message,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          response: true,
          sentAt: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Delivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDelivery(
    @common.Param() params: DeliveryWhereUniqueInput
  ): Promise<Delivery | null> {
    try {
      return await this.service.deleteDelivery({
        where: params,
        select: {
          createdAt: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          response: true,
          sentAt: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
