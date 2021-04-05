import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {Utilisateur} from '../../../interfaces/utilisateur';

@Component({
  selector: 'app-admin-liste-candidat-entreprise',
  templateUrl: './admin-liste-candidat-entreprise.component.html',
  styleUrls: ['./admin-liste-candidat-entreprise.component.css']
})
export class AdminListeCandidatEntrepriseComponent implements OnInit {

  liste: Utilisateur[];
  fiche: Utilisateur[];
  listeType: string;
  carte: string;
  type: boolean;

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getOffreDemande();
  }

  getOffreDemande(): void {
    this.listeType = this.route.snapshot.paramMap.get('liste');

    if (this.listeType === 'listeCandidat') {
      this.type = false;
      this.carte = 'Liste des candidats';
      this.utilisateurService.getUtilisateur().subscribe(r =>
      {
        this.liste = r;
        this.liste = this.liste.filter(f => f.isEntreprise === false);
      });

    } else if (this.listeType === 'listeEntreprise') {
      this.type = true;
      this.carte = 'Liste des entreprises';
      this.utilisateurService.getUtilisateur().subscribe(r =>
      {
        this.liste = r;
        this.liste = this.liste.filter(f => f.isEntreprise === true);
        console.log(this.liste);
      });

    }

  }

}
