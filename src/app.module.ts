import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HealthModule } from "@src/core/health/health.module";
import { PingModule } from "./core/ping/ping.module";

import { LoggerModule } from "@shared/logger/logger.module";

import { UserModule } from "@contexts/users/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HealthModule,
    PingModule,
    UserModule,
  ],
})
export class AppModule {}
