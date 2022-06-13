import { TestBed } from '@angular/core/testing';

import { PeripheriqueService } from './peripherique.service';

describe('PeripheriqueService', () => {
  let service: PeripheriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeripheriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
