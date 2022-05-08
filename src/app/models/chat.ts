import {Contact} from "./contact";
import {Message} from "./message";

export interface Chat {
  id: number,
  guid: string,
  chat_identifier: string,
  service_name: string,
  last_read_message_timestamp: Date,
  last_activity: Date,
  contact: Contact,
  messages: Message[],
}
