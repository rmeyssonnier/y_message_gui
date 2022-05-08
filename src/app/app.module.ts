import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationDetailsComponent } from './conversation-details/conversation-details.component';
import { ChatListElemComponent } from './chat-list/chat-list-elem/chat-list-elem.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MessageComponent } from './conversation/message/message.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {FormsModule} from "@angular/forms";
import {AvatarModule} from "ngx-avatar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatListComponent,
    ConversationComponent,
    ConversationDetailsComponent,
    ChatListElemComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
