import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { JumiaComponent } from './jumia.component';
import { JumiaRoutingModule } from './jumia-routing.module'
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';
import { environment } from '../environments/jumia-environment'
import { ConfigModel, APP_CONFIG } from '@tiq-soft-test/models/core'

const appConfig = (httpClient: HttpClient, config: ConfigModel) => {
  return () => {
    httpClient.get('app-config/config.json').toPromise().then(resp => {
      Object.assign(config, resp)
    }).catch(() => console.log('config file not available, please provide it'))
  }
}

@NgModule({
  imports: [CommonModule, JumiaRoutingModule, TuiRootModule, HttpClientModule],
  exports: [JumiaRoutingModule],
  declarations: [JumiaComponent],
})
export class JumiaModule {

  static forRoot(): ModuleWithProviders<JumiaModule> {
    return {
      ngModule: JumiaModule,
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
