import { Injectable } from '@angular/core';

@Injectable()
export class ChatServiceService {

  public messages: Array<string> = [];
  public currentMessage: string;

  constructor() { }

  public pushingToMessages(message): void {
    this.messages.push(message);
    this.currentMessage = message;
    console.log(this.messages);
    console.log(this.currentMessage);
  }
}
