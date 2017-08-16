import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { MessageComponent } from './message/message.component';
import { ChatServiceService } from './services/chat-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
