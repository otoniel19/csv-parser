# csv-parser
# Installation
```sh
  $ npm install github:otoniel19/csv-parser
  $ cd ./node_modules/csv-parser
  $ yarn build
```
# Usage
# Commonjs
```js
  const parser = require('csv-parser')
  console.log('./test.csv') // { csv: ['Hello','World'] , size: 2 }
```
# TypeScript
```ts
  import parser from 'csv-parser'
  console.log(parser('./2_test.csv')) // { csv: ['Hello','World','Hey','Ops','P'] , size: 5 }
```
