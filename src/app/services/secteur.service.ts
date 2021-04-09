import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../interfaces/secteur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  secteurApi = 'https://biteyelo.com/api/secteurs';

  constructor(private http: HttpClient) { }

  getSecteur(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(this.secteurApi);
  }

}
