import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JumiaModule } from '@tiq-soft-test/shells/jumia'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JumiaModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
