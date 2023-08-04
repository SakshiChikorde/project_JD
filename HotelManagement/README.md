# HotelManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.











......Create github branch in main 

......Open d drive and create new folder -> open folder -> right click -> click on git bash -> enter cmd -> git clone <!--git clone https://github.com/SakshiChikorde/project_JD -b JD_MainProject-->

......Open vs code -> open folder -> open terminal ->enter cmd -> ng new Project_name

......Create Global Component home using cmd -> ng g c home ->  redirect home using app-routing.module.ts file. Create buttons on home page.

......Create modules user, admin, owner using cmd -> ng g m Module_Name 

......There's another cmd to generate module -> directly redirects all paths n sets everthing automatically -> ng g m admin --route admin --module app.module <!--we have created admin module using this cmd-->

......redirect all modules to app-routing.ts file using loadchildren -> this is known as lazy loading 

......Within modules create components using module terminal 

......after creating component ownerhome redirect empty path in owner-routing.module.ts file


......Create common named folder for service -> within it create file commomconstants.ts file ->then create services in same folder terminal using cmd -> ng g s service_name

......Create buttons on home.html file ->create redirection using <!--(click)="journey('admin')"--> where journey() is function call and ('admin') is static value added in string

......Create constructor router and sevices in home.ts file 

......Declare the function in home.ts file 

......add proprty journey in string format within common.service.ts file 

......add materials using cmd -> ng add @angular/material

......add json-server --watch db.json

 