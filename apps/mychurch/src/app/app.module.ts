import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MychurchModule } from '@tiq-soft-test/shells/mychurch'
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MychurchModule
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
