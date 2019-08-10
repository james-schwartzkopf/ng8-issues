Demonstrates an issue with using ```[style.color]``` on a mat-button with Ivy enabled.

```
<button mat-button [style.color]="'red'">A Button</button>
```
```
ERROR in src/app/app.component.html(4,20): Type '"red"' is not assignable to type 'ThemePalette'.
```
