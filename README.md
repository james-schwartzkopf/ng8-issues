# Reproduce issue with IE11 + Ivy + MatPaginator

to run:
```
yarn && yarn run start
open http://127.0.0.1:8080/index.html in IE11
```

When using IE11 with enableIvy = true, MatPaginator throws the following error unless the classlist.js polyfill is installed.

```
"TypeError: Unable to get property 'add' of undefined or null reference
   at DefaultDomRenderer2.prototype.addClass (http://127.0.0.1:8080/vendor-es5.js:77117:64)
   at BaseAnimationRenderer.prototype.addClass (http://127.0.0.1:8080/vendor-es5.js:75657:66)
   at setClass (http://127.0.0.1:8080/vendor-es5.js:34066:54)
   at renderStylingMap (http://127.0.0.1:8080/vendor-es5.js:34092:13)
   at renderInitialStyling (http://127.0.0.1:8080/vendor-es5.js:36943:1)
   at ɵɵelementStart (http://127.0.0.1:8080/vendor-es5.js:42493:1)
   at MatPaginator_Template (http://127.0.0.1:8080/vendor-es5.js:71662:5)
   at executeTemplate (http://127.0.0.1:8080/vendor-es5.js:35719:5)
   at checkView (http://127.0.0.1:8080/vendor-es5.js:36822:5)
   at componentRefresh (http://127.0.0.1:8080/vendor-es5.js:36626:5)"
```

NOTE: In order to get to this error, I had to rewrite the es5 bundles to remove "use strict"; as a workaround for [@angular/angular #30569](https://github.com/angular/angular/issues/30569)

I'm not sure if this should be considered a defect or a documentation issue, but the workaround is to install the classlist.js polyfill and 
add uncomment it in src/polyfill.ts
