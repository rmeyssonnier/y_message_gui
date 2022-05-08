import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListElemComponent } from './chat-list-elem.component';

describe('ChatListElemComponent', () => {
  let component: ChatListElemComponent;
  let fixture: ComponentFixture<ChatListElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatListElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
