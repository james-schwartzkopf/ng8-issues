import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TestLibComponent],
  imports: [
    CommonModule
  ],
  exports: [TestLibComponent]
})
export class TestLibModule { }
