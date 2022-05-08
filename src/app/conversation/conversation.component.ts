import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Chat} from "../models/chat";
import {ChatService} from "../services/chat.service";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('chat_area', { read: ElementRef }) public chatArea!: ElementRef<any>;

  @Input() chat!: Chat;
  loadEnded: boolean = false;
  loading: boolean = false;
  enableInfiniteScroll: boolean = false;
  messageInput: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    setTimeout(() => this.enableInfiniteScroll = true, 3000)
  }

  ngAfterViewChecked(): void {
    console.log(this.loadEnded)
    if (!this.loadEnded) {
      console.log('auto scroll')
      this.scrollToBottom();
    }
  }

  scrollToBottom(position?: number): void {
    console.log('autoscroll')
    try {
      if (position === undefined) {
        if (this.chatArea.nativeElement.scrollTop != this.chatArea.nativeElement.scrollHeight)
          this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight;
      } else {
        this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight * 0.1;
      }
    } catch(err) {
      console.error(err)
    }
  }

  onScrollUp() {
    this.loading = true;
    this.loadEnded = true;
    this.chatService.getMessages(this.chat.id, this.chat.messages.length, 15).subscribe(r => {
      this.loading = false;
      this.chat.messages = [...r, ...this.chat.messages].sort((a, b) => {
        return (new Date(b.date).getTime() - new Date(a.date).getTime())
      });
      this.scrollToBottom(10);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => this.scrollToBottom(), 500)
  }

  isEnterPressed($event: KeyboardEvent) {
    if ($event.key === 'Enter' && this.messageInput.length > 0) {
      this.chatService.sendMessage(this.chat.contact.phone_number, this.messageInput).subscribe(r => {
        this.chatService.getMessages(this.chat.id, 0, 1).subscribe(r => {
          this.chat.messages = [...r, ...this.chat.messages].sort((a, b) => {
            return (new Date(b.date).getTime() - new Date(a.date).getTime())
          });
          this.scrollToBottom();
        });
      });
      this.messageInput = '';
    }
  }
}
