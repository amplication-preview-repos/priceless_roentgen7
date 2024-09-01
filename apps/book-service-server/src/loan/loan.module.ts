import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LoanModuleBase } from "./base/loan.module.base";
import { LoanService } from "./loan.service";
import { LoanController } from "./loan.controller";
import { LoanResolver } from "./loan.resolver";

@Module({
  imports: [LoanModuleBase, forwardRef(() => AuthModule)],
  controllers: [LoanController],
  providers: [LoanService, LoanResolver],
  exports: [LoanService],
})
export class LoanModule {}
