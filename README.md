# React Starter Project

## Commands

clean folder and files (dist|node_modules)
```
npm run clean
```

build for production (folder 'dist')
```
npm install
npm run build
```

start dev server
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

| Route    | RedirectsTo | Component | Description         |
|----------|-------------|-----------|---------------------|
| "/"      | "/start"    |           | Entry Point         |
| "/start" |             | App       | Entry Point         |
| "*"      |             | NotFound  | Route was not found |