import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list-elem',
  templateUrl: './chat-list-elem.component.html',
  styleUrls: ['./chat-list-elem.component.css']
})
export class ChatListElemComponent implements OnInit {

  @Input() profileImage: string = '';
  @Input() online: boolean = false;
  @Input() name: string = '';
  @Input() lastMessage: string = '';
  @Input() lastMessageDate: Date = new Date();
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
