import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumiaComponent } from './jumia.component';
import { JumiaRoutingModule } from './jumia-routing.module'
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';
import { APP_CONFIG } from '@tiq-soft-test/app-config'


@NgModule({
  imports: [CommonModule, JumiaRoutingModule, TuiRootModule],
  exports: [JumiaRoutingModule],
  declarations: [JumiaComponent],
})
export class JumiaModule {

  static forRoot(environment: unknown): ModuleWithProviders<JumiaModule> {
    return {
      ngModule: JumiaModule,
      providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: TUI_ICONS_PATH, useValue: iconsPathFactory('assets/taiga-ui/icons/') }
      ]
    }
  }

 }
