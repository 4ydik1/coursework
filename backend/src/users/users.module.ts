import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {User} from "./users.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [UsersController],
    imports: [
        SequelizeModule.forFeature([User])
    ],
})
export class UsersModule {
}
