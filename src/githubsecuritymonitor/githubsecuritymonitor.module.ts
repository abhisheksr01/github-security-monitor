import { Module } from '@nestjs/common';
import { GithubSecurityMonitorController } from './githubsecuritymonitor.controller';
import { GithubSecurityMonitorService as GithubSecurityMonitorService } from './githubsecuritymonitor.service';

@Module({
  controllers: [GithubSecurityMonitorController],
  providers: [GithubSecurityMonitorService],
})
export class GithubSecurityMonitorModule {}
