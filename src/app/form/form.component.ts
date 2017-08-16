import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
  }

  public onSubmitClick(message): void {
    this.chatService.pushingToMessages(message);
  }

}
