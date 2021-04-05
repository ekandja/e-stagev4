import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Secteur} from '../../../interfaces/secteur';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {SecteurService} from '../../../services/secteur.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-offres-par-secteur',
  templateUrl: './offres-par-secteur.component.html',
  styleUrls: ['./offres-par-secteur.component.css']
})
export class OffresParSecteurComponent implements OnInit {

  offreDemande: OffresDemandes[];
  secteurs: Secteur[];
  id: string;
  messageType: string;
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
    this.id = this.route.snapshot.paramMap.get('id');
    this.messageType = 'Offres de stage';
    this.i = 3;

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemande = this.offreDemande.filter(f => ((f.type === 'Offre' && Number(this.id) === f.secteur.id )));
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
      this.offreDemande = this.offreDemande.filter(f => ((f.type === 'Offre' && Number(this.id) === f.secteur.id )));
      this.offreDemande = this.offreDemande.slice(this.offreDemande.length - this.i, this.offreDemande.length - 1);
      window.scroll(0, 360);
    });
  }

}
