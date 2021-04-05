import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {PutOffreDemande} from '../../../interfaces/put-offre-demande';

@Component({
  selector: 'app-admin-offre-demande-attente',
  templateUrl: './admin-offre-demande-attente.component.html',
  styleUrls: ['./admin-offre-demande-attente.component.css']
})
export class AdminOffreDemandeAttenteComponent implements OnInit {

  @Input() attente: OffresDemandes;
  offreDemande: OffresDemandes[];
  offreDemandeSelected: OffresDemandes;
  isAccpeter: boolean;
  putOffreDemande: PutOffreDemande;
  utilisateur: string;
  secteur: string;


  constructor(private offreDemandeService: OffreDemandeService) {
  }

  ngOnInit(): void {

  }

  onclickAccpeter(id): void {

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemande = this.offreDemande.filter(f => f.id === id);
      this.offreDemandeSelected = this.offreDemande[0];

      this.utilisateur = '/api/utilisateurs/' + this.offreDemandeSelected.utilisateur.id;

      if (this.offreDemandeSelected.secteur !== null) {
        this.secteur = '/api/secteurs/' + this.offreDemandeSelected.secteur.id;
      } else {
        this.secteur = null;
      }

 /*     this.putOffreDemande =
      {
        "titre": this.offreDemandeSelected.titre,
        "type": this.offreDemandeSelected.type,
        "debutAt": this.offreDemandeSelected.debutAt,
        "finAt": this.offreDemandeSelected.finAt,
        "parutionAt": this.offreDemandeSelected.parutionAt,
        "dureeStage": this.offreDemandeSelected.dureeStage,
        "description": this.offreDemandeSelected.description,
        "heureParSemaine": this.offreDemandeSelected.heureParSemaine,
        "competencesRercherchees": this.offreDemandeSelected.competencesRercherchees,
        "isEmploiApresStage": this.offreDemandeSelected.isEmploiApresStage,
        "infoSupplementaires": this.offreDemandeSelected.infoSupplementaires,
        "programmeSuivi": this.offreDemandeSelected.programmeSuivi,
        "autresFormations": this.offreDemandeSelected.autresFormations,
        "competencesAcquises": this.offreDemandeSelected.competencesAcquises,
        "descriptionPosteRecherche": this.offreDemandeSelected.descriptionPosteRecherche,
        "typeDeStage": this.offreDemandeSelected.typeDeStage,
        "dureeDeStage": this.offreDemandeSelected.dureeDeStage,
        "remuneration": this.offreDemandeSelected.remuneration,
        "autresInformations": this.offreDemandeSelected.autresInformations,
        "isActif": this.offreDemandeSelected.isActif,
        "isSupprimer": this.offreDemandeSelected.isSupprimer,
        "isValider": this.offreDemandeSelected.isValider,
        "isVedette": this.offreDemandeSelected.isVedette,
        "secteur": this.secteur,
        "utilisateur": this.utilisateur,
      };*/

      this.offreDemandeSelected.isValider = true;
      this.offreDemandeService.updateOffreDemande(this.putOffreDemande, this.offreDemandeSelected.id).subscribe();

    });

  }
}
