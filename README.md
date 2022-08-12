# Novel-Ideas UI
**DRAFT - In work**

![GitHub package.json version](https://img.shields.io/github/package-json/v/klemmy129/novel-ideas-ui)
![GitHub top language](https://img.shields.io/github/languages/top/klemmy129/novel-ideas-ui)
![GitHub](https://img.shields.io/github/license/klemmy129/novel-ideas-ui)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/klemmy129/novel-ideas-ui)
![GitHub branch checks state](https://img.shields.io/github/checks-status/klemmy129/novel-ideas-ui/main)
![GitHub issues](https://img.shields.io/github/issues/klemmy129/novel-ideas-ui)


This is VERY early days of this app.

**Description:** This application is the frontend for novel-ideas Rest backend. That managing data and information about a novel or script you want to write

This is also a Angular 14 demonstrator and a leaning tool for me.

**Technology Used:**
- [Angular](https://angular.io/) version 14.1.x.
- Typescript 4.6.x
- Bulma
- NodeJS 16

## Building

* Run `npm install` all the packages
* Run `ng build` the output is in `dist/` 

## Startup
You will need to compile and run `novel-ideas` rest backend.

PS. I put in some data into `novel-ideas`via the swagger page. The UI is not ready yet to save data.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Coding Sample Explained - WIP

What is currently in:
* Base structure.
* Routing
* Added `proxy.conf.json` so the backend appears under `http://localhost:4200/api/`
* Themes - but still need work.
* First connection to the backend service to get all books.
* Getting a "page" of data, but this will change.
* Some unit tests

### Environment
- Created an interface for the environments.
- Then read the environments into an injectable class that implements that interface.

### Structure - WIP


