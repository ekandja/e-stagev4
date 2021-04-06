import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Utilisateur} from '../interfaces/utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurApi = 'http://64.227.82.26:8000/api/utilisateurs';
  utilisateur: Utilisateur;

  constructor(private http: HttpClient) { }

  getUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateurApi);
  }

  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateurApi, utilisateur, httpOptions);
  }

  deleteUtilisateur(id: string): Observable<Utilisateur>  {
    return this.http.delete<Utilisateur>(this.utilisateurApi + '/' + id, httpOptions);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<any>{
    const id = utilisateur.id;
    return this.http.put<Utilisateur>(this.utilisateurApi + '/' + id, httpOptions);
  }
}
