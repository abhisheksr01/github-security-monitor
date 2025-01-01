# Description

[![CICD Pipeline](https://github.com/abhisheksr01/github-security-monitor/actions/workflows/pipeline.yml/badge.svg)](https://github.com/abhisheksr01/github-security-monitor/actions/workflows/pipeline.yml)

This repository generates alerts based on github security alerts and built using [Nest](https://github.com/nestjs/nest) framework.

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### API Endpoints

- Health Endpoint
  
  The health endpoint can be accessed at:
  
  ```bash
  http://localhost:3000/githubsecuritymonitor/health
  ```

- Swagger API Documentation can be accessed at:
  
  ```bash
  http://localhost:3000/api
  ```

## Run tests

Execute unit, e2e and acceptance tests

```bash
npm run test
```

To execute individual test types as below:

```bash
# unit tests
npm run test:unit

# e2e tests
npm run test:e2e

# bdd acceptance tests
npm run test:bdd
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
npm install -g mau
mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

For additional support:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

## License

This repository is [MIT licensed](./LICENSE).
