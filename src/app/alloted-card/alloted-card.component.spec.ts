import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotedCardComponent } from './alloted-card.component';

describe('AllotedCardComponent', () => {
  let component: AllotedCardComponent;
  let fixture: ComponentFixture<AllotedCardComponent>;
//test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
