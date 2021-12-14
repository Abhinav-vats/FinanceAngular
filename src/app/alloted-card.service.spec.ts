import { TestBed } from '@angular/core/testing';

import { AllotedCardService } from './alloted-card.service';

describe('AllotedCardService', () => {
  let service: AllotedCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllotedCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
