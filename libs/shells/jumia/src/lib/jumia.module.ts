import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumiaComponent } from './jumia.component';
import { JumiaRoutingModule } from './jumia-routing.module'
import { TUI_ICONS_PATH, iconsPathFactory, TuiRootModule } from '@taiga-ui/core';


@NgModule({
  imports: [CommonModule, JumiaRoutingModule, TuiRootModule],
  exports: [JumiaRoutingModule],
  declarations: [JumiaComponent],
  providers: [{
    provide: TUI_ICONS_PATH,
    useValue: iconsPathFactory('assets/taiga-ui/icons/'),
  }]
})
export class JumiaModule { }
