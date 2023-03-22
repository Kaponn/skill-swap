import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @HttpCode(200)
  @Get('messages/:roomId')
  async getMessages(@Param('roomId') roomId: string) {}

  @HttpCode(201)
  @Post('messages/:roomId')
  async postMessage(
    @Param('roomId') roomId: string,
    @Body('message') message,
  ) {}

  @HttpCode(201)
  @Post('rooms/:userId')
  async createRoom(@Param('userId') userId: string) {}
}
