#### Reproduction

https://github.com/james-schwartzkopf/ng8-issues/tree/mat-tab-group-ivy-selected-index

Steps to reproduce:
1. yarn 
2. yarn run build
 
#### Expected Behavior

Should compile cleanly and tabs should work.

#### Actual Behavior

Error:
```
ERROR in src/app/app.component.html(2,16): Property 'selectedIndex' does not exist on type 'HTMLElement'.
```

#### Notes
May be related to #16750

The error doesn't occur using @angular/material 8.1.4 or with Ivy disabled.

I'm guessing this is due to the change to _MatTabGroupBase, maybe it needs an @Directive?  Not 100% sure how
inheritance works in Ivy.
https://github.com/angular/angular/pull/31379

#### Environment

- Angular: 8.2.6
- CDK/Material: 8.2.0
