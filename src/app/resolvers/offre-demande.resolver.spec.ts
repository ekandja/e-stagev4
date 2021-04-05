import { TestBed } from '@angular/core/testing';

import { OffreDemandeResolver } from './offre-demande.resolver';

describe('OffreDemandeResolver', () => {
  let resolver: OffreDemandeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OffreDemandeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
