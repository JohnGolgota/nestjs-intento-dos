import { Module } from "@nestjs/common";

import { PingController } from "./api/ping.controller";

@Module({
  controllers: [PingController],
})
export class PingModule {}
