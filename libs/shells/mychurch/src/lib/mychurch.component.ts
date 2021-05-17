import { Component, Inject } from '@angular/core';
import { APP_CONFIG, ConfigModel } from '@tiq-soft-test/models/core';

@Component({
  selector: 'tiq-soft-test-mychurch',
  template: `
    <p>
      mychurch works!
    </p>
    <pre>{{ appConfig | json}}</pre>
  `,
  styles: [
  ]
})
export class MychurchComponent  {

  constructor(@Inject(APP_CONFIG) public appConfig: ConfigModel) {  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
