import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  niveauAcces: string;
  userID: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.niveauAcces = localStorage.getItem('niveauAcces');
    this.userID = localStorage.getItem('userID');
  }

  deconnexion(): void {

    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('niveauAcces');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nomEntreprise');
    localStorage.removeItem('isSuppriner');
    localStorage.removeItem('isActif');
    localStorage.removeItem('idValider');
    localStorage.removeItem('isConnecter');
    localStorage.removeItem('userID');
    this.router.navigate(['/']);
  }

}
