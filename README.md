# ImplementationJscropper

\- Angular 21 (with [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0) + cropperjs.

\- See the root folder for example images.

## Application:

Crop images of types: **gif**, **png** and **jpg**.

The images will be cropped in rounded style.

It is possible to set the minimum and maximum crop-box size.

When an image is cropped this application shows a preview of that image.

## Installation + run app

**Angular 21** needs a **Node.js** version of at least _20.19.0_

**Command to install**

_npm install_

or shorter:

_npm i_

**Command to run the application:**

_ng serve --open_

or shorter:

_ng s --o_

### **Changelog:**

\- Upgrade to _Angular 21_ and upgraded other packages.

*   Removed deprecated _Karma_ and installed _Vitest._
*   Migrated _Jasmine_ tests to _Vitest_ tests for future use (command: **ng generate refactor-jasmine-vitest**).

\- Migration to _Zoneless_. Removed package _Zone.js_ and all its references.

\- Minor changes.

_June 2025_

\- Upgrade to Angular 20. 

\- Using the keyword **protected** for properties that are only accessible in the template.

\- Using the keyword **readonly** for properties initialized by Angular.