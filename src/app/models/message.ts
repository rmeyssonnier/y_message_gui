import {Attachment} from "./attachment";

export interface Message {
  guid: string,
  text: string,
  service: string,
  date: Date,
  date_read: Date,
  destination_caller_id: string,
  is_from_me: boolean,
  has_attachment: boolean,
  attachments: Attachment[];
}
