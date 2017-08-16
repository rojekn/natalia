import { Component, OnInit, Input } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  messages: Array<string> = this.chatService.messages;

  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
  }

}
