import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../interfaces/secteur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  secteurApi = 'https://64.227.82.26:8000/api/secteurs';

  constructor(private http: HttpClient) { }

  getSecteur(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(this.secteurApi);
  }

}
