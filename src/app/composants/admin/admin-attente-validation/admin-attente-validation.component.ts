import {Component, OnInit} from '@angular/core';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-attente-validation',
  templateUrl: './admin-attente-validation.component.html',
  styleUrls: ['./admin-attente-validation.component.css']
})
export class AdminAttenteValidationComponent implements OnInit {

  offreDemandeAttente: OffresDemandes[];
  offre: OffresDemandes[];
  demande: OffresDemandes[];
  isOffreExist = true;
  isDemandeExist = true;

  role: string;

  constructor(private offreDemandeService: OffreDemandeService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
          this.offre = this.offreDemandeAttente.filter(f => f.isValider === false && f.isSupprimer === false && f.type === 'Offre');
          this.demande = this.offreDemandeAttente.filter(f => f.isValider === false && f.isSupprimer === false && f.type === 'Demande');

          if (this.offre.length === 0){
            this.isOffreExist = false;
          }
          if (this.demande.length === 0){
            this.isDemandeExist = false;
          }

          this.offreDemandeAttente = this.offreDemandeAttente.filter(f => f.isValider === false);
        });
      }
    } else {
        localStorage.nonAutorise = '1';
        this.router.navigate(['/']);
    }
  }


}
