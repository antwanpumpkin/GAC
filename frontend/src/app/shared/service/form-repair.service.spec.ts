import { TestBed } from '@angular/core/testing';

import { FormRepairService } from './form-repair.service';

describe('FormRepairService', () => {
  let service: FormRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
