import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('githubSecurityMonitorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(GET) /githubsecuritymonitor/health', () => {
    return request(app.getHttpServer())
      .get('/githubsecuritymonitor/health')
      .expect(200)
      .expect(
        '{"status":200,"message":"The github-security-monitor app is running"}',
      );
  });
});
