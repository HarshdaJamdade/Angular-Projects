import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  @Output() public MyEvent = new EventEmitter()

  public SendMessage()
  {
    this.MyEvent.emit("Hello Parent.....")
  }
}
