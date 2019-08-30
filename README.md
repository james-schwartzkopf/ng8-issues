Demonstrates an issue with using async pipe (other pipes?) in a library with Ivy enabled.

To duplicate clone and run:

```
cd lib-workspace
yarn
ng build test-lib
cd dist/test-lib
yarn pack

cd ../app-workspace
yarn cache clean && rm -rf node_modules yarn.lock #only needed if you've changed test-lib
yarn
ng serve

```

Visit the app-workspace page: http://localhost:4200/ you should see the following errors in the console (even
 though there were no errors in ng serve):
```
core.js:6014 ERROR Error: The pipe 'async' could not be found!
    at getPipeDef$1 (core.js:35089)
    at Module.ɵɵpipe (core.js:35055)
    at TestLibComponent_Template (test-lib.js:32)
    at executeTemplate (core.js:12177)
    at checkView (core.js:13615)
    at componentRefresh (core.js:13359)
    at refreshChildComponents (core.js:11858)
    at refreshDescendantViews (core.js:11757)
    at checkView (core.js:13616)
    at componentRefresh (core.js:13359)
defaultErrorLogger	@	core.js:6014
Promise.then (async)		
scheduleMicroTask	@	zone-evergreen.js:542
scheduleTask	@	zone-evergreen.js:381
scheduleTask	@	zone-evergreen.js:211
scheduleMicroTask	@	zone-evergreen.js:231
scheduleResolveOrReject	@	zone-evergreen.js:845
then	@	zone-evergreen.js:955
bootstrapModule	@	core.js:40609
./src/main.ts	@	main.ts:11
__webpack_require__	@	bootstrap:79
0	@	main.ts:12
__webpack_require__	@	bootstrap:79
checkDeferredModules	@	bootstrap:45
webpackJsonpCallback	@	bootstrap:32
(anonymous)	@	main.js:1
```

```
main.ts:12 Error: The pipe 'async' could not be found!
    at getPipeDef$1 (core.js:35089)
    at Module.ɵɵpipe (core.js:35055)
    at TestLibComponent_Template (test-lib.js:32)
    at executeTemplate (core.js:12177)
    at checkView (core.js:13615)
    at componentRefresh (core.js:13359)
    at refreshChildComponents (core.js:11858)
    at refreshDescendantViews (core.js:11757)
    at checkView (core.js:13616)
    at componentRefresh (core.js:13359)
(anonymous)	@	main.ts:12
Promise.then (async)		
scheduleMicroTask	@	zone-evergreen.js:542
scheduleTask	@	zone-evergreen.js:381
scheduleTask	@	zone-evergreen.js:211
scheduleMicroTask	@	zone-evergreen.js:231
scheduleResolveOrReject	@	zone-evergreen.js:845
then	@	zone-evergreen.js:955
bootstrapModule	@	core.js:40609
./src/main.ts	@	main.ts:11
__webpack_require__	@	bootstrap:79
0	@	main.ts:12
__webpack_require__	@	bootstrap:79
checkDeferredModules	@	bootstrap:45
webpackJsonpCallback	@	bootstrap:32
(anonymous)	@	main.js:1
```

NOTE: The same code in the default lib-workspace project works without error, so this appears to be related to
being a node module somehow.
