import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MychurchComponent } from './mychurch.component';
import { MychurchRoutingModule } from './mychurch-routing.module';
// import { TuiRootModule } from '@taiga-ui/core/components';
// import { TUI_ICONS_PATH } from '@taiga-ui/core/tokens';
// import { iconsPathFactory } from '@taiga-ui/core/utils/miscellaneous';
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';


@NgModule({
  imports: [CommonModule, MychurchRoutingModule, TuiRootModule,],
  exports: [MychurchRoutingModule],
  declarations: [MychurchComponent],
  providers: [
    {
        provide: TUI_ICONS_PATH,
        useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
]
})
export class MychurchModule {}
