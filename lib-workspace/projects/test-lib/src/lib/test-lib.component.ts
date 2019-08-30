import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      {{test$ | async}}
    </p>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {
  public test$ = of('Async Value');
  constructor() { }

  ngOnInit() {
  }

}
