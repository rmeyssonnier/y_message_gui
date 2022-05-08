import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chat} from "../models/chat";
import {Observable} from "rxjs";
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseApi = 'http://127.0.0.1:8080'

  constructor(private httpClient: HttpClient) { }

  getAllChats() : Observable<Chat[]> {
    const url = this.baseApi + '/chat'
    return this.httpClient.get<Chat[]>(url);
  }

  getChat(id: number) : Observable<Chat> {
    const url = this.baseApi + '/chat/' + String(id)
    return this.httpClient.get<Chat>(url);
  }

  getMessages(id: number, start: number, length: number) : Observable<Message[]> {
    const url = this.baseApi + '/message/' + String(id) + '/' + String(start) + '/' + String(length)
    return this.httpClient.get<Message[]>(url);
  }

  sendMessage(phoneNumber: string, message: string) {
    const url = this.baseApi + '/message/send'
    const body = {
      phone_number : phoneNumber,
      message: message
    }
    return this.httpClient.post<any>(url, body);
  }
}
