import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../interfaces/offre-demande';
import {Secteur} from '../../interfaces/secteur';
import {OffreDemandeService} from '../../services/offre-demande.service';
import {SecteurService} from '../../services/secteur.service';
import {ActivatedRoute} from '@angular/router';
import alasql from 'alasql';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  offreDemande: OffresDemandes[];
  secteurs: Secteur[];
  offreDemandeCarte: OffresDemandes[];
  type: string;
  messageType: string;

  resultat: any;

  titreRecherche: string;

  i: number;

  constructor(private offreDemandeService: OffreDemandeService, private secteurService: SecteurService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.titreRecherche = this.route.snapshot.paramMap.get('titre')
    this.recuperationTitre(this.titreRecherche);
    this.getSecteurs();
  }

  recuperationTitre(titre: string): void {
    this.titreRecherche = this.route.snapshot.paramMap.get('titre');

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemande = this.offreDemande.filter(f => ((f.titre === this.titreRecherche )));
     });

  }

  getSecteurs(): void {
    this.secteurService.getSecteur().subscribe(r => {
      this.secteurs = r;
    });
  }





}
