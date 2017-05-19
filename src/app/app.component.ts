import { Component } from '@angular/core';
import { AppService, IMessage } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private appService: AppService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
