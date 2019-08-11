Demonstrates an issue with using ```[yPosition]``` on a mat-menu with Ivy enabled.

```
<button mat-button [matMenuTriggerFor]="aboveMenu">Menu 1</button>
<mat-menu #aboveMenu="matMenu" [yPosition]="'above'">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
```
```
ERROR in src/app/app.component.html(15,32): Property 'yPosition' does not exist on type 'HTMLElement'.
```
