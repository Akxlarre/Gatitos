import { TestBed } from '@angular/core/testing';

import { SGatitosService } from './sgatitos.service';

describe('SGatitosService', () => {
  let service: SGatitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGatitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
