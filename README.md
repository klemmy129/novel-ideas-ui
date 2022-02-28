# Novel-Ideas UI
**DRAFT - In work**

This is VERY early days of this app.

**Description:** This application is the frontend for novel-ideas Rest backend. That managing data and information about a novel or script you want to write

This is also a Angular 13 demonstrator and a leaning tool for me.

**Technology Used:**
- [Angular](https://angular.io/) version 13.2.4.
- Bulma
- NodeJS 16

## Building
Note: You need to install a local created NPM package from [novel-ideas](https://github.com/klemmy129/novel-ideas) it is `novel-ideas-api-n.n.n.tgz`. 

This has the DTO models you need for the frontend.

* You can find it in the compiled area in `novel-ideas/novel-ideas-api/target/typescript-generator/`. There you will find 2x files a typescript file and package.json. 
* You need to run `npm pack` this creates the `novel-ideas-api-n.n.n.tgz` file.
* Move the `.tgz` file different folder eg create a `npm` folder at the same level as `novel-ideas` and `novel-ideas-ui`
* Then from the root of `novel-ideas-ui` run  eg `npm install ../npm/novel-ideas-api-0.0.3.tgz -s`

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

### Structure - WIP

### Environment - WIP




