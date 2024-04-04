import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
import { MailComponentComponent } from './mail-component/mail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SentEmailComponent,
    MailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
