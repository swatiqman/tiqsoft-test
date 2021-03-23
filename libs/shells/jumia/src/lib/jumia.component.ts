import { Component, Inject } from '@angular/core';
import { ConfigModel, APP_CONFIG } from '@tiq-soft-test/models/core'

@Component({
  selector: 'jumia-jumia',
  template: `
    <p>
      jumia works!
    </p>
    <pre>{{ appConfig | json}}</pre>
  `,
  styles: [
  ]
})
export class JumiaComponent  {

  constructor(@Inject(APP_CONFIG) public appConfig: ConfigModel) {  }

  // ngOnInit(): void {
  // }

}
