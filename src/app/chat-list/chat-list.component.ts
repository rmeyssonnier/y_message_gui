import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService} from "../services/chat.service";
import {Chat} from "../models/chat";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Output() chatSelected: EventEmitter<Chat> = new EventEmitter<Chat>()

  chats: Chat[] = []
  selectedId = 0

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getAllChats().subscribe(r => {
      setTimeout(() => this.selectConversation(r[0].id), 500);
      this.chats = r.sort((a, b) => {
        return new Date(b.last_activity).getTime() - new Date(a.last_activity).getTime()
      });
    });
  }

  selectConversation(id: number) {
    this.chatService.getChat(id).subscribe(r => {
      this.selectedId = id;
      this.chatSelected.emit(r);
    });
  }
}
