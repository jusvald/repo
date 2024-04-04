import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {

  @Input() emails: any[] = [];

  toggleEmail(index: number) {
    this.emails[index].espansa = !this.emails[index].espansa;
  }

  evidenziaSpeciale(index: number) {
    this.emails[index].evidenziato = !this.emails[index].evidenziato;
  }
}
