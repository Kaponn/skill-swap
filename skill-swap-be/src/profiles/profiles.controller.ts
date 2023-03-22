import { Body, Controller, Get, HttpCode, Param, Patch } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  @HttpCode(200)
  @Get('/:id')
  async getOne(@Param('id') id: string) {}

  @HttpCode(204)
  @Patch()
  async updateProfile(@Body('data') data) {}
}
