import { Given, When, Then, After } from '@cucumber/cucumber';
import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';

let app: INestApplication;
let response: supertest.Response;

// Initialize the NestJS application before running the tests
Given('the service is running', async () => {
  const moduleFixture = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});

When('I make a GET request to {string}', async function (url: string) {
  // Write code here that turns the phrase above into concrete actions
  response = await supertest(app.getHttpServer()).get(url);
});

// Check the response status
Then('the response status should be {int}', (statusCode: number) => {
  if (response.status !== statusCode) {
    throw new Error(
      `Expected status code ${statusCode}, but got ${response.status}`,
    );
  }
});

// Check the response body
Then(
  'the response should contain {string} with value {string}',
  (key: string, value: string) => {
    if (response.body[key] !== value) {
      throw new Error(
        `Expected ${key} to be ${value}, but got ${response.body[key]}`,
      );
    }
  },
);

Then(
  'the response should contain {string} with value {string} and {string} with value {string}',
  function (
    statusKey: string,
    statusValue: string,
    messageKey: string,
    messageValue: string,
  ) {
    // Write code here that turns the phrase above into concrete actions
    if (response.body[statusKey] !== Number(statusValue)) {
      throw new Error(
        `Expected ${statusKey} to be ${statusValue}, but got ${response.body[statusKey]}`,
      );
    }
    if (response.body[messageKey] !== messageValue) {
      throw new Error(
        `Expected ${messageKey} to be ${messageValue}, but got ${response.body[messageKey]}`,
      );
    }
  },
);
// Close the app after each scenario
After(async () => {
  await app.close();
});
