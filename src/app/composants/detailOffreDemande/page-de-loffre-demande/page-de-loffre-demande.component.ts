import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {ActivatedRoute} from '@angular/router';
import {SecteurService} from '../../../services/secteur.service';
import {Secteur} from '../../../interfaces/secteur';

@Component({
  selector: 'app-page-de-loffre-demande',
  templateUrl: './page-de-loffre-demande.component.html',
  styleUrls: ['./page-de-loffre-demande.component.css']
})
export class PageDeLOffreDemandeComponent implements OnInit {

  messageType = 'Offres de stage';
  offreDemande: OffresDemandes[];
  offreDemandeCarte: OffresDemandes[];
  secteurs: Secteur[];
  id: string;
  dateDebut: string;
  type: string;
  dateFin: string;
  emploi: string;

  constructor(private offreService: OffreDemandeService, private route: ActivatedRoute, private secteurService: SecteurService) {
  }

  ngOnInit(): void {
    this.getOffreById();
    this.getSecteurs();
  }

  getOffreById(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    this.offreService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemandeCarte = r;
      this.offreDemandeCarte = this.offreDemande.filter(f => ((f.type === this.type )));
      this.offreDemandeCarte = this.offreDemande.slice(this.offreDemande.length - 5, this.offreDemande.length - 1);

      this.offreDemande = this.offreDemande.filter(f => f.id === Number(this.id));
      this.offreDemande.forEach(item => {
        this.dateDebut = item.debutAt.substr(0, 10);
        this.dateFin = item.finAt.substr(0, 10);
        if (item.isEmploiApresStage){
          this.emploi = 'Oui';
        } else {
          this.emploi = 'Non';
        }
      });
    });
  }

  getSecteurs(): void {
    this.secteurService.getSecteur().subscribe(r => {
      this.secteurs = r;
    });
  }


}
