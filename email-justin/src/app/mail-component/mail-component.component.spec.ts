import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponentComponent } from './mail-component.component';

describe('MailComponentComponent', () => {
  let component: MailComponentComponent;
  let fixture: ComponentFixture<MailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailComponentComponent]
    });
    fixture = TestBed.createComponent(MailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
