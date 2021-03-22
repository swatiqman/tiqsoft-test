import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JumiaModule } from '@tiq-soft-test/shells/jumia'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JumiaModule.forRoot(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
