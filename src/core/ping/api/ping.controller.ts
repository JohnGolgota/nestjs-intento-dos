import { Controller, Get, HttpCode, Inject, Logger } from "@nestjs/common";

@Controller("")
export class PingController {
  constructor(@Inject(Logger) private readonly logger: Logger) {}

  @Get()
  @HttpCode(200)
  run() {
    this.logger.log("Health endpoint called!");
    return { gretting: "Hello World!" };
  }
}
