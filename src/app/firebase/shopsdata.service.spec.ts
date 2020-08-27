import { TestBed } from '@angular/core/testing';

import { ShopsdataService } from './shopsdata.service';

describe('ShopsdataService', () => {
  let service: ShopsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
