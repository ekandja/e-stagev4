import { TestBed } from '@angular/core/testing';

import { OffreDemandeService } from './offre-demande.service';

describe('OffreDemandeService', () => {
  let service: OffreDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
