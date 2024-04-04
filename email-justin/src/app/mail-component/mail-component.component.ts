import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.css']
})
export class MailComponentComponent {
  subject: string;
  body: string;
  sentMails: { subject: string, body: string }[] = [];

  sendMail() {
    if (this.subject && this.body) {
      this.sentMails.push({ subject: this.subject, body: this.body });
      this.subject = '';
      this.body = '';
    }
 }
}
