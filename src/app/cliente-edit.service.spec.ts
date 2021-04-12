import { TestBed } from '@angular/core/testing';

import { ClienteEditService } from './clientes/cliente-edit/cliente-edit.service';

describe('ClienteEditService', () => {
  let service: ClienteEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
