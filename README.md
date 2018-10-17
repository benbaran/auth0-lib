# benbaran/auth0-lib

## Auth0 Library for Angular 6+

### USAGE

npm install --save auth0-js

npm install --save auth0-lib

Add to app.module.ts

import { Auth0LibModule} from 'auth0-lib';

  imports: [
    ...
    Auth0LibModule
  ],

See sample app.component.ts and app.component.html of logon / logoff example.

### BUILD

git clone https://github.com/benbaran/auth0-lib.git

cd auth0-lib

npm install

cd .\projects\auth0-lib\

npm version patch

cd ..\..

ng build auth0-lib

npm publish dist/