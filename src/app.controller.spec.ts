import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthResponseDTO } from './dto/healthresponse.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('AppController', () => {
    it('should return "The github-security-monitor app is running" & status 200', () => {
      const actualResponse: HealthResponseDTO = appController.getHealth();

      expect(actualResponse.message).toBe(
        'The github-security-monitor app is running',
      );
      expect(actualResponse.status).toBe(200);
    });
  });
});
