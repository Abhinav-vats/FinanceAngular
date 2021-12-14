import { TestBed } from '@angular/core/testing';

import { ActiveServiceService } from './active-service.service';

describe('ActiveServiceService', () => {
  let service: ActiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
