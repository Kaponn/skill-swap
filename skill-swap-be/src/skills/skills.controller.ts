import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('skills')
export class SkillsController {
  @HttpCode(200)
  @Get()
  async getAll() {}

  @HttpCode(200)
  @Get()
  async getOne(@Query('skill') skill: string) {}

  @HttpCode(201)
  @Post()
  async addSkill(@Body('data') data) {}

  @HttpCode(200)
  @Delete('/:id')
  async deleteSkill(@Param('id') id: string) {}
}
