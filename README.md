# TypeScript web application template
[Demo](https://ndry.github.io/ts-jspm-template/public/index.html)

This setup allows using the same codebase for both local development and public demo serving with static web server (e.g. github pages).

`local` url parameter flag (like in `index.html?local`) is used to decide whether to use public links or local files. The absence of that flag defaults to public links usage.

The root `jspm.json` file is used to dynamically map modules versions.

**Note: All project flies imports (like `import {CountUper} from "./CountUper.js"`) should reference specifically .js files!** This is for compatibility with inbrowser ES Modules importing; Typescript understands such imports correctly.

The compiled *.js code should be commited into the repository, the node_modules or jspm_modules may NOT be commited.

`rxjs` is used as an example of a complex npm module usage and is NOT necessary for the templete to work. 
Here `rxjs` bundle is imported as a whole, but as an es6 module.

## Build and run locally

```
npm i
jspm i
npm run build
npm start
```

## Add new dependency

1. Use `package.json#jspm.dependencies` to add new dependency which should be imported in a browser
1. Run `jspm i`
1. Manually add types path into `tsconfig.json#compilerOptions.paths`
1. Manually add bundle path into `initConfig.import` in `public/index.html`