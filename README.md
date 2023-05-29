## Iniciar projeto:

```npm init
npm install cypress@4.12.1 --save-dev
npm install cypress-cucumber-preprocessor@4.1.4 --save-dev
npm i @cypress/xpath
```

## Iniciar cypress

```npm run open```


# Editar pastas:

integration 
- adicionar testes

cypress/plugin/index.js
- adicionar:


 ```const cucumber = require("cypress-cucumber-preprocessor").default;

 module.exports = (on, config) => {
 
 on("file:preprocessor", cucumber());
 
 };
 ```

 ## Iniciar Projeto sem instalar bibliotecas manualmente
 - npm install

 ## Rodar projeto:
 
 ```
 - npm run test
 - npm run open
 - npm test:search 
 ```
 
 ## package.json

```
  "scripts": {
    "test": "cypress run",
    "open": "cypress open",
    "test:search": "cypress run -s cypress/integration/Google.feature"
  }
  ```
