import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MychurchAdminModule } from '@tiq-soft-test/shells/mychurch-admin'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MychurchAdminModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
