import { TestBed } from '@angular/core/testing';

import { NgxMaterialFormUtilsService } from './ngx-material-form-utils.service';

describe('NgxMaterialFormUtilsService', () => {
  let service: NgxMaterialFormUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialFormUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
