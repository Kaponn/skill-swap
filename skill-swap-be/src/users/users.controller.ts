import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Session,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @HttpCode(201)
  @Post('/signup')
  async signUp(@Body('data') data, @Session() session: any) {}

  @HttpCode(200)
  @Post('/signin')
  async signIn(@Body('data') data, @Session() session: any) {}

  @HttpCode(200)
  @Post('/signout')
  signOut(@Session() session: any) {}

  @HttpCode(200)
  @Get('/:id')
  async getOne(@Param('id') id: string) {}

  @HttpCode(200)
  @Get()
  async getAll() {}

  @HttpCode(200)
  @Get()
  async getAllWithGivenSkill(@Body('skill') skill: string) {}

  @HttpCode(204)
  @Patch('/password')
  async updatePassword(@Body('data') data) {}

  @HttpCode(204)
  @Patch('/email')
  async updateEmail(@Body('data') data) {}

  @HttpCode(200)
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {}
}
