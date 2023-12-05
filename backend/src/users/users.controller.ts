import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/user.dto";
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";

@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    @Post('/postuser')
    async create(@Body() userDto: CreateUserDto) {
        const user = await this.userRepository.create(userDto);
        return user;
    }

    @Get('/user')
    async getAll() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
        // return "Working";
    }

}
