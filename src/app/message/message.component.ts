import { Component, OnInit, Input } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message: string;

  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
  }

  
}
