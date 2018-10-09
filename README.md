# benbaran/auth0-lib

## Project Creation

npm install -g @angular/cli@latest

ng new auth0-lib-app --routing

rename auth0-lib-app auth0-lib

cd auth0-lib

ng generate library auth0-lib --prefix=a0l

ng build auth0-lib

git remote add origin https://github.com/benbaran/auth0-lib.git

git push -u origin master

## Install Angular Material

npm install --save @angular/material @angular/cdk @angular/animations hammerjs


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

After installing, import it on your app's entry point (e.g. src/main.ts).

import 'hammerjs';

Add to styles.css:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";


ng g module Material

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }


npm install --save auth0-js

ng g component Home
ng g component Callback
ng g component NotFound

import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', component: NotFoundComponent }
];