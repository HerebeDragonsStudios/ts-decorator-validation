### Repository CI/CD

#### Github

4 workflows were defined:
 - main.yml - main workflow. handles dependencies, build, testing and releasing on tags
 - docs.yml - generates documentation
 - npm-publish - publishes the lib to npm
 - cache-cleaner.yml - cleans a branch's caches automatically upon its deletion

#### Secrets
 - NPM_TOKEN: Access token to publish to npm
 - WORKFLOW_TOKEN: Token to allow the main workflow's release job to trigger the docs and npm publish workflows