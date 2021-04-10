import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Utilisateur} from '../interfaces/utilisateur';
import {NewEditUtilisateur} from '../interfaces/new-edit-utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  // utilisateurApi = 'https://biteyelo.com:8000/api/utilisateurs';
  utilisateurApi = 'http://localhost:8000/api/utilisateurs';
  utilisateur: Utilisateur;
  newEditUtilisateur: NewEditUtilisateur;

  constructor(private http: HttpClient) { }

  getUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateurApi);
  }

  addUtilisateur(newEditUtilisateur: NewEditUtilisateur): Observable<NewEditUtilisateur> {
    return this.http.post<NewEditUtilisateur>(this.utilisateurApi, newEditUtilisateur, httpOptions);
  }

  deleteUtilisateur(id: string): Observable<Utilisateur>  {
    return this.http.delete<Utilisateur>(this.utilisateurApi + '/' + id, httpOptions);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<any>{
    const id = utilisateur.id;
    return this.http.put<Utilisateur>(this.utilisateurApi + '/' + id, httpOptions);
  }
}
