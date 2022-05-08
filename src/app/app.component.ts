import { Component } from '@angular/core';
import {Chat} from "./models/chat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'y-message';
  selectedChat!: Chat;
}
