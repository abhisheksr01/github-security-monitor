import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubSecurityMonitorService {
  getHealth(): string {
    return 'The github-security-monitor app is running';
  }
}
