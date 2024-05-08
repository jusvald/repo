import { Component } from '@angular/core';

interface Mail {
  id: number;
  to: string;
  subject: string;
  text: string;
  expanded: boolean;
  special: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  to: string = '';
  subject: string = '';
  text: string = '';
  sentMails: Mail[] = [];

  sendMail(): void {
    const newMail: Mail = {
      id: Date.now(),
      to: this.to,
      subject: this.subject,
      text: this.text,
      expanded: false,
      special: false
    };
    this.sentMails.push(newMail);
    this.to = '';
    this.subject = '';
    this.text = '';
  }
}
