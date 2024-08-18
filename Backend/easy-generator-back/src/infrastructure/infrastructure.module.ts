import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from '../application/application.module';
import UserSchema from './adapters/respository/users/schema/user.schema';
import UserController from './controllers/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Configuration } from '../config/env.enum';

@Module({
  imports: [
    ApplicationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get(Configuration.MONGO_CONNECTION_STRING)}`,
      }),
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
})
export class InfrastructureModule {}
