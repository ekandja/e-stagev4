import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../interfaces/secteur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  secteurApi = 'http://biteyelo.com/api/secteurs';
  // secteurApi = 'http://localhost:8000/api/secteurs';
  constructor(private http: HttpClient) { }

  getSecteur(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(this.secteurApi);
  }

}
