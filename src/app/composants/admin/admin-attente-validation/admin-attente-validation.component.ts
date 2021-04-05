import {Component, OnInit} from '@angular/core';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {Utilisateur} from '../../../interfaces/utilisateur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-attente-validation',
  templateUrl: './admin-attente-validation.component.html',
  styleUrls: ['./admin-attente-validation.component.css']
})
export class AdminAttenteValidationComponent implements OnInit {

  offreDemandeAttente: OffresDemandes[];
  role: string;

  constructor(private offreDemandeService: OffreDemandeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getOffreDemandeAttente();
  }

  getOffreDemandeAttente(): void {

    this.role = localStorage.getItem('niveauAcces');
    if (localStorage.getItem('isConnecter')) {
      if (this.role === '111') {
        this.router.navigate(['/admin/liste/Demande']);
      }
      if (this.role === '333') {
        this.router.navigate(['/admin/liste/Offre']);
      }
      if (this.role === '999') {
        this.offreDemandeService.getOffreDemande().subscribe(r => {
          this.offreDemandeAttente = r;
          this.offreDemandeAttente = this.offreDemandeAttente.filter(f => f.isValider === true);
        });
      }
    } else {
        localStorage.nonAutorise = '1';
        this.router.navigate(['/']);
    }
  }


}
