import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MychurchAdminComponent } from './mychurch-admin.component';
import { ConfigModel, APP_CONFIG } from '@tiq-soft-test/models/core'
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';
import { environment } from '../environments/mychurch-admin-environment';
import { MychurchAdminRoutingModule } from './mychurch-admin-routing.module';

const appConfig = (httpClient: HttpClient, config: ConfigModel) => {
  return () => {
    httpClient.get('app-config/config.json').toPromise().then(resp => {
      Object.assign(config, resp)
    }).catch(() => console.log('config file not available, please provide it'))
  }
}

@NgModule({
  imports: [CommonModule, MychurchAdminRoutingModule, TuiRootModule, HttpClientModule],
  exports: [MychurchAdminRoutingModule],
  declarations: [
    MychurchAdminComponent
  ],
})
export class MychurchAdminModule {
  static forRoot(): ModuleWithProviders<MychurchAdminModule> {
    return {
      ngModule: MychurchAdminModule,
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
