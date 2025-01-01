import { Test, TestingModule } from '@nestjs/testing';
import { GithubSecurityMonitorService } from '../../../src/githubsecuritymonitor/githubsecuritymonitor.service';

describe('GithubSecurityMonitorService', () => {
  let service: GithubSecurityMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubSecurityMonitorService],
    }).compile();

    service = module.get<GithubSecurityMonitorService>(
      GithubSecurityMonitorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return app running message', () => {
    expect(service.getHealth()).toBe(
      'The github-security-monitor app is running',
    );
  });
});
