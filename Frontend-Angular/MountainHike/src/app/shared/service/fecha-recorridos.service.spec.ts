import { TestBed } from '@angular/core/testing';

import { FechaRecorridosService } from './fecha-recorridos.service';

describe('FechaRecorridosService', () => {
  let service: FechaRecorridosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaRecorridosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
