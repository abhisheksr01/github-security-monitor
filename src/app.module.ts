import { Module } from '@nestjs/common';
import { GithubSecurityMonitorModule } from './githubsecuritymonitor/githubsecuritymonitor.module';

@Module({
  imports: [GithubSecurityMonitorModule],
})
export class AppModule {}
