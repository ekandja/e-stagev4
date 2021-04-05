import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {OffresDemandes} from '../interfaces/offre-demande';
import {Utilisateur} from '../interfaces/utilisateur';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffreDemandeService {

  offreDemandeApi = 'http://localhost:8000/api/offre_demandes';

  constructor(private http: HttpClient) { }

  getOffreDemande(): Observable<OffresDemandes[]> {
    return this.http.get<OffresDemandes[]>(this.offreDemandeApi);
  }

  addOffreDemande(offreDemande: OffresDemandes): Observable<OffresDemandes> {
    return this.http.post<OffresDemandes>(this.offreDemandeApi, offreDemande, httpOptions);
  }

  deleteOffreDemande(id: string): Observable<OffresDemandes>  {
    return this.http.delete<OffresDemandes>(this.offreDemandeApi + '/' + id, httpOptions);
  }

  updateOffreDemande(offreDemande: any, id): Observable<any>{
    // const id = offreDemande.id;
    console.log(id);
    console.log(offreDemande);
    return this.http.put<OffresDemandes>(this.offreDemandeApi + '/' + id, offreDemande, httpOptions);
  }


}
