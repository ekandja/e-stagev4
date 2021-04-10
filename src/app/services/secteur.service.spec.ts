import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {Secteur} from '../interfaces/secteur';
import {Observable} from 'rxjs';
import { SecteurService } from './secteur.service';

describe('SecteurService', () => {
  let service: SecteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ],
      declarations: []
    });
    service = TestBed.inject(SecteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
