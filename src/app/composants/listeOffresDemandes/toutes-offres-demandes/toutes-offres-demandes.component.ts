import {Component, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Secteur} from '../../../interfaces/secteur';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {SecteurService} from '../../../services/secteur.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-toutes-offres-demandes',
  templateUrl: './toutes-offres-demandes.component.html',
  styleUrls: ['./toutes-offres-demandes.component.css']
})
export class ToutesOffresDemandesComponent implements OnInit {

  offreDemande: OffresDemandes[];
  secteurs: Secteur[];
  offreDemandeCarte: OffresDemandes[];
  type: string;
  messageType: string;
  filtreType: string;

  i: number;


  constructor(private offreDemandeService: OffreDemandeService, private secteurService: SecteurService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getOffreDemandes();
    this.getSecteurs();
  }

  // Recupération des offres et de l'utilisateur
  getOffreDemandes(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    if (this.type === 'offres'){
      this.messageType = 'Offres de stage';
      this.filtreType = 'Offre';
    }
    if (this.type === 'demandes'){
      this.messageType = 'Demandes de stage';
      this.filtreType = 'Demande';
    }
    this.i = 3;

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemande = this.offreDemande.filter(f => ((f.type === this.filtreType )));
      this.offreDemandeCarte = this.offreDemande.slice(this.offreDemande.length - this.i, this.offreDemande.length - 1);
      this.offreDemande = this.offreDemande.slice(this.offreDemande.length - this.i, this.offreDemande.length);
    });
  }

  getSecteurs(): void {
    this.secteurService.getSecteur().subscribe(r => {
      this.secteurs = r;
    });
  }

  chargerPlus(): void {
    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.i = this.i + 3;
      this.offreDemande = r;
      this.offreDemande = this.offreDemande.filter(f => ((f.type === this.filtreType )));
      this.offreDemandeCarte = this.offreDemande.slice(this.offreDemande.length - this.i, this.offreDemande.length - 1);
      this.offreDemande = this.offreDemande.slice(this.offreDemande.length - this.i, this.offreDemande.length - 1);
      window.scroll(0, 360);
    });
  }

}
