import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {ChatService} from "../../services/chat.service";
import {Attachment} from "../../models/attachment";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message!: Message;
  @Input() contact!: Contact

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    if (this.message.has_attachment) {
      console.log(this.message)
    }
  }

  getMedia(attachment: Attachment) {
    return 'http://localhost:8080/attachment/' + attachment.id;
  }
}
