# Demo Nest Api

This is a demo project for a payment platform backend. It is built with NestJS and Mongo.

## Table of Contents

- [Demo Nest Api](#demo-nest-api)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Development Environment](#development-environment)
    - [Production Environment](#production-environment)
    - [Testing](#testing)
    - [Authentication Information](#authentication-information)
    - [Swagger Documentation](#swagger-documentation)
    - [Features](#features)
    - [Project Structure](#project-structure)
    - [Git Workflow](#git-workflow)
        - [Summary of the Git Workflow:](#summary-of-the-git-workflow)


### Installation

First, Using yarn:

```bash
- $ yarn
```


### Development Environment

To run the development environment:

```
- yarn start:dev
```

### Production Environment

To run the production environment:

```
- yarn start:prod
```

### Testing
Run the tests using Yarn:
```
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

### Authentication Information

Use the following credentials to authenticate:

```
username: reggie.m@sdbank.co
password: 123457
```

### Swagger Documentation
```
- http://localhost:3000/docs
(only available in development environment)
```
  

### Features

There are many features in Demo Nest Api System

- Authentication ( signUp <OAuth>, signIn, forgotPassword, resetPassword, changePassword )
- upload file

### Project Structure
```

```

### Git Workflow
##### Summary of the Git Workflow:
Always start by checking out the latest code from the production branch.

1. Start from production branch
  ```
  - git checkout production
  - git pull
  ```
2. Create a new branch
  ```
  - git checkout -b feature/feature-name
  ```
3. Make changes, commit and push
  ```
  - git add .
  - git commit -m "commit message"
  - git push origin feature/feature-name
  ```
4. Merge into dev branch
  ```
  - git checkout dev
  - git pull
  - git merge --no-ff origin/feature/feature-name
  - git push
  ```
5. Merge into staging branch
  ```
  - git checkout staging
  - git pull
  - git merge --no-ff origin/dev
  - git push
  ```
1. Merge into production branch
  ```
  - git checkout production
  - git pull
  - git merge --no-ff origin/staging
  - git push
  ```
