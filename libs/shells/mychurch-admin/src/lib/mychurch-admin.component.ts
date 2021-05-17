import { Component, Inject } from '@angular/core';
import { APP_CONFIG, ConfigModel } from '@tiq-soft-test/models/core';

@Component({
  selector: 'tiq-soft-test-mychurch-admin',
  template: `
    <p>
      mychurch-admin works!
    </p>
    <pre>{{ appConfig | json}}</pre>
  `,
  styles: [
  ]
})
export class MychurchAdminComponent {

  constructor(@Inject(APP_CONFIG) public appConfig: ConfigModel) {  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
