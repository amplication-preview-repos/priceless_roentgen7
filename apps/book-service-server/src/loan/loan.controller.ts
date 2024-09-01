import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LoanService } from "./loan.service";
import { LoanControllerBase } from "./base/loan.controller.base";

@swagger.ApiTags("loans")
@common.Controller("loans")
export class LoanController extends LoanControllerBase {
  constructor(
    protected readonly service: LoanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
