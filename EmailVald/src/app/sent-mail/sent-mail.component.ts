import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent extends AppComponent {
  @Input() override sentMails: any;

  toggleExpanded(mail: any): void {
    mail.expanded = !mail.expanded;
  }

  makeSpecial(mail: any): void {
    mail.special = !mail.special;
  }
}
