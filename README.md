# Frontend

## nvm: node and npm version

You should only use 
- Node v7.10.1
- Npm v4.2.0

You can get multiple versions running when using [nvm](https://github.com/creationix/nvm)

## Developer Tools

You should use chrome for debugging, because there are two useful extensions:
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
- [React DevTools](https://github.com/facebook/react-devtools/)

## Linting

extends TypeScript airbnb config, for details [see tslint.json](./tslint.json)

## IDE and paths

It is strongly recommended to use IntelliJ for developing purposes. Though this projects works with all IDEs, IntelliJ has a big advantage: You can import with custom paths.
There are a two shortcuts to avoid long relative paths:
- js -> src/js/
- scss -> src/scss/

Example:

```
import Comp from '../../../../components/Test/Component'; // DONT
import Comp from 'js/components/Test/Component'; // DO
``` 

## Webpack and Reporting

When you run build command, a file called [_webpack_report.html](./_webpack-report.html) is created.
You can explore the package size of the build bundle in there. Useful for long loading times and optimization.

Webpack config was created out of nothing, therefore there is no starter-pack to look for hints. Configs can be found in [config folder](./config)

## Tests 

Tests are not typesafe! Too much trouble for too less effort. Every existing test is right next to its component/function/action/reducer

Test coverage can be found in [coverage-report](./coverage/index.html)

## Languages and i18n

i18n is used in this project to get multilinguality working. You can find translation files in [js/constants/translations](./src/js/constants/translations)

## Commands

In order to run the frontend correctly, you need to setup the backend. Tests should run without backend installed.

clean folder and files (dist, node_modules, coverage)
```
npm run clean
```

build for production (folder 'dist')
```
npm install
npm run build
```

start dev server (http://localhost:8080/)
```
npm install
npm run start
```


run tests folder 'coverage'
```
npm install
npm run test
```

## Routes

| Route          | RedirectsTo  | Component  | Description         |
|----------------|--------------|------------|---------------------|
| "/"            | "/start"     |            |                     |
| "/start"       |              | App        |                     |
| "*"            |              | NotFound   | Route not found     |
 