import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {NewEditOffreDemande} from '../../../interfaces/new-edit-offre-demande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-offre-demande-attente',
  templateUrl: './admin-offre-demande-attente.component.html',
  styleUrls: ['./admin-offre-demande-attente.component.css']
})
export class AdminOffreDemandeAttenteComponent implements OnInit {

  @Input() attente: OffresDemandes;

  offreDemande: OffresDemandes[];
  offreDemandeSelected: OffresDemandes;
  updateOffreDemande: NewEditOffreDemande;
  isAccpeter: boolean;
  utilisateur: string;
  secteur: string;


  constructor(private offreDemandeService: OffreDemandeService, private router: Router) {
  }

  ngOnInit(): void {
    this.updateOffreDemande = {
      titre: '',
      type: '',
      debutAt: '',
      finAt: '',
      parutionAt: '',
      dureeStage: '',
      description: '',
      heureParSemaine: 0,
      competencesRercherchees: '',
      isEmploiApresStage: false,
      infoSupplementaires: '',
      programmeSuivi: '',
      autresFormations: '',
      competencesAcquises: '',
      descriptionPosteRecherche: '',
      typeDeStage: '',
      dureeDeStage: 0,
      remuneration: '',
      autresInformations: '',
      isActif: true,
      isSupprimer: false,
      isValider: false,
      isVedette: true,
      secteur: null,
      utilisateur: null
    };

  }

  onclickMiseAJ(id, action): void {

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
      if (action === 'accepter') {
        this.offreDemandeSelected.isValider = true;
      }
      if (action === 'refuser'){
        this.offreDemandeSelected.isSupprimer = true;
      }

      this.updateOffreDemande = {
        titre: this.offreDemandeSelected.titre,
        type: this.offreDemandeSelected.type,
        debutAt: this.offreDemandeSelected.debutAt,
        finAt: this.offreDemandeSelected.finAt,
        parutionAt: this.offreDemandeSelected.parutionAt,
        dureeStage: String(this.offreDemandeSelected.dureeStage),
        description: this.offreDemandeSelected.description,
        heureParSemaine: this.offreDemandeSelected.heureParSemaine,
        competencesRercherchees: String(this.offreDemandeSelected.competencesRercherchees),
        isEmploiApresStage: this.offreDemandeSelected.isEmploiApresStage,
        infoSupplementaires: this.offreDemandeSelected.infoSupplementaires,
        programmeSuivi: this.offreDemandeSelected.utilisateur.programmeSuivi,
        autresFormations: this.offreDemandeSelected.autresFormations,
        competencesAcquises: this.offreDemandeSelected.competencesAcquises,
        descriptionPosteRecherche: this.offreDemandeSelected.descriptionPosteRecherche,
        typeDeStage: this.offreDemandeSelected.typeDeStage,
        dureeDeStage: this.offreDemandeSelected.dureeDeStage,
        remuneration: this.offreDemandeSelected.remuneration,
        autresInformations: this.offreDemandeSelected.autresInformations,
        isActif: this.offreDemandeSelected.isActif,
        isSupprimer: this.offreDemandeSelected.isSupprimer,
        isValider: this.offreDemandeSelected.isValider,
        isVedette: this.offreDemandeSelected.isVedette,
        secteur: this.secteur,
        utilisateur: this.utilisateur
      };
      this.offreDemandeService.updateOffreDemande(this.updateOffreDemande, String(this.offreDemandeSelected.id))
        .subscribe( r => {
          // window.location.reload();
          this.router.navigate([this.router.url]);
        });
    });
  }
}
