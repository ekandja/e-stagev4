import { Component, OnInit } from '@angular/core';
import {OffreDemandeService} from '../../services/offre-demande.service';
import {OffresDemandes} from '../../interfaces/offre-demande';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  typeOffreDemande = 'Offres de stage';
  offreDemande: OffresDemandes[];
  offre: OffresDemandes[];
  demande: OffresDemandes[];
  isConnecter: string;
  nonAutorise: string;


  constructor(private offreDemandeService: OffreDemandeService, private router: Router ) { }

  ngOnInit(): void {
    this.getOffreDemandes();
    this.nonAutorise = localStorage.getItem('nonAutorise');
  }

  // Recupération des offres
  getOffreDemandes(): void {

    if (localStorage.isConnecter) {
      this.router.navigate(['/admin/attente']);
    }

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.demande = this.offreDemande.filter(f => ((f.type === 'Demande' && f.isVedette)));
      this.offre = this.offreDemande.filter(f => ((f.type === 'Offre')));

      this.demande = this.demande.slice(this.demande.length - 5, this.demande.length - 1);
      this.offre = this.offre.slice(this.offre.length - 5, this.offre.length - 1);

    });
  }

  fermerAlerte(): void {
    localStorage.removeItem('nonAutorise');
  }

}
