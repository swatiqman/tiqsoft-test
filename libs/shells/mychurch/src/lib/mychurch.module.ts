import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MychurchComponent } from './mychurch.component';
import { MychurchRoutingModule } from './mychurch-routing.module';
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';
import { environment } from '../environments/mychurch-environment'
import { ConfigModel, APP_CONFIG } from '@tiq-soft-test/models/core'

const appConfig = (httpClient: HttpClient, config: ConfigModel) => {
  return () => {
    httpClient.get('app-config/config.json').toPromise().then(resp => {
      Object.assign(config, resp)
    }).catch(() => console.log('config file not available, please provide it'))
  }
}
@NgModule({
  imports: [CommonModule, MychurchRoutingModule, TuiRootModule, HttpClientModule],
  exports: [MychurchRoutingModule],
  declarations: [MychurchComponent],
})
export class MychurchModule {
  static forRoot(): ModuleWithProviders<MychurchModule> {
    return {
      ngModule: MychurchModule,
      providers: [
        { provide: APP_CONFIG, useValue: {...environment} },
        { provide: APP_INITIALIZER,
          useFactory: appConfig,
          deps: [HttpClient, APP_CONFIG],
          multi: true
        },
        { provide: TUI_ICONS_PATH, useValue: iconsPathFactory('assets/taiga-ui/icons/') },
      ]
    }
  }
}
