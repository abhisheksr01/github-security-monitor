import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { HealthResponseDTO } from './entity/HealthResponse.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @ApiResponse({
    status: 200,
    description: 'health endpoint',
    type: [HealthResponseDTO],
    example: {
      status: 200,
      message: 'The github-security-monitor app is running',
    },
  })
  getHealth(): HealthResponseDTO {
    return {
      status: 200,
      message: this.appService.getHello(),
    };
  }
}
