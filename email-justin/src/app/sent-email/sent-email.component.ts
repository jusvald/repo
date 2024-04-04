import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent {
  @Input() mails: { subject: string, body: string }[];
  expandedIndex: number;

  expandMail(index: number) {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }

  isExpanded(index: number) {
    return this.expandedIndex === index;
  }
}
