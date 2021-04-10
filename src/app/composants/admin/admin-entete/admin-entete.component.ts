import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-entete',
  templateUrl: './admin-entete.component.html',
  styleUrls: ['./admin-entete.component.css']
})
export class AdminEnteteComponent implements OnInit {

  nom: string;
  prenom: string;
  role: string;
  niveauAcces: string;
  userID: string

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.identite();
  }

  identite(): void {

    if (localStorage.getItem('isConnecter')) {

      this.nom = localStorage.getItem('nom');
      this.prenom = localStorage.getItem('prenom');

      if (localStorage.getItem('niveauAcces') === String(111)) {
        this.role = 'Étudiant';
      }
      if (localStorage.getItem('niveauAcces') === String(333)) {
        this.role = 'Entreprise';
      }
      if (localStorage.getItem('niveauAcces') === String(999)) {
        this.role = 'Admin';
      }

      this.niveauAcces = localStorage.getItem('niveauAcces');
      this.userID = localStorage.getItem('userID');
    }
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
