import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {OffresDemandes} from '../interfaces/offre-demande';
import {Utilisateur} from '../interfaces/utilisateur';
import {NewEditOffreDemande} from '../interfaces/new-edit-offre-demande';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffreDemandeService {

  offreDemandeApi = 'http://64.227.82.26:8000/api/offre_demandes';

  constructor(private http: HttpClient) { }

  getOffreDemande(): Observable<OffresDemandes[]> {
    return this.http.get<OffresDemandes[]>(this.offreDemandeApi);
  }

  addOffreDemande(offreDemande: NewEditOffreDemande): Observable<NewEditOffreDemande> {
    return this.http.post<NewEditOffreDemande>(this.offreDemandeApi, offreDemande, httpOptions);
  }

  deleteOffreDemande(id: string): Observable<OffresDemandes>  {
    return this.http.delete<OffresDemandes>(this.offreDemandeApi + '/' + id, httpOptions);
  }

  updateOffreDemande(updateOffreDemande: NewEditOffreDemande, id): Observable<any>{
    return this.http.put<NewEditOffreDemande>(this.offreDemandeApi  + '/' + id, updateOffreDemande, httpOptions);
  }


}
