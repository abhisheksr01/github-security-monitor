import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { HealthResponseDTO } from './dto/healthresponse.dto';
import { GithubSecurityMonitorService } from './githubsecuritymonitor.service';

@Controller('githubsecuritymonitor')
export class GithubSecurityMonitorController {
  constructor(
    private readonly githubSecurityMonitorService: GithubSecurityMonitorService,
  ) {}

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
      message: this.githubSecurityMonitorService.getHealth(),
    };
  }
}
