import { TestBed } from '@angular/core/testing';

import { IProductsService } from './iproducts.service';

describe('IProductsService', () => {
  let service: IProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
