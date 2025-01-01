import { Test, TestingModule } from '@nestjs/testing';
import { GithubSecurityMonitorController } from './githubsecuritymonitor.controller';
import { GithubSecurityMonitorService } from './githubsecuritymonitor.service';
import { HealthResponseDTO } from './dto/healthresponse.dto';

describe('githubSecurityMonitorController', () => {
  let githubSecurityMonitorController: GithubSecurityMonitorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GithubSecurityMonitorController],
      providers: [GithubSecurityMonitorService],
    }).compile();

    githubSecurityMonitorController = app.get<GithubSecurityMonitorController>(
      GithubSecurityMonitorController,
    );
  });

  describe('githubSecurityMonitorController', () => {
    it('should return "The github-security-monitor app is running" & status 200', () => {
      const actualResponse: HealthResponseDTO =
        githubSecurityMonitorController.getHealth();

      expect(actualResponse.message).toBe(
        'The github-security-monitor app is running',
      );
      expect(actualResponse.status).toBe(200);
    });
  });
});
