import {Component, OnInit} from '@angular/core';
import {NewEditOffreDemande} from '../../../interfaces/new-edit-offre-demande';
import {Secteur} from '../../../interfaces/secteur';
import {formatDate} from '@angular/common';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SecteurService} from '../../../services/secteur.service';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-admin-modif-offre-demande',
  templateUrl: './admin-modif-offre-demande.component.html',
  styleUrls: ['./admin-modif-offre-demande.component.css']
})
export class AdminModifOffreDemandeComponent implements OnInit {

  isActif: boolean;
  isSupprimer: boolean;
  isValider: boolean;
  isVedette: boolean;
  dureeDeStage: number;
  secteur: string;
  utilisateur: string;
  utilisateurID: string;
  offreID: string;
  emploiApresStage: any;

  ajoutDemande: string;
  titrePage: string;
  dateParution: any;
  offreDemandeInt: OffresDemandes[];
  offreDemandeObj: OffresDemandes;
  newOffreDemande: NewEditOffreDemande;

  tableSecteur: Secteur[];
  secteurID: number;
  userID: string;


  constructor(private offreDemandeService: OffreDemandeService, private router: Router, private route: ActivatedRoute, private secteurService: SecteurService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.ajoutDemande = this.route.snapshot.paramMap.get('type');
    this.offreID = this.route.snapshot.paramMap.get('id');
    this.newOffreDemande = {
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

    if (this.ajoutDemande === 'offre') {
      this.titrePage = 'Modification d\'une offre de stage';
      this.newOffreDemande.type = 'Offre';
    }
    if (this.ajoutDemande === 'demande') {
      this.titrePage = 'Modification d\'une demande de stage';
      this.newOffreDemande.type = 'Demande';
    }
    this.getSecteur();
    this.modifOffreDemande();
  }

  calculDuree(dateDebut, dateFin): number {
    dateDebut = new Date(dateDebut);
    dateFin = new Date(dateFin);
    return (dateFin.valueOf() - dateDebut.valueOf()) / (1000 * 3600 * 24);
  }

  modifOffreDemande(): void {
    this.dateParution = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemandeInt = r;
      this.offreDemandeInt = this.offreDemandeInt.filter(f => f.id === Number(this.offreID));
      this.offreDemandeObj = this.offreDemandeInt[0];

      this.utilisateur = 'api/utilisateurs/' + this.offreDemandeObj.utilisateur.id;


      if (this.offreDemandeObj.secteur === null) {
        this.secteurID = 0;
        this.secteur = null;
      } else {
        this.secteurID = this.offreDemandeObj.secteur.id;
        this.secteur = '/api/secteurs/' + String(this.secteurID);
      }

    //  this.emploiApresStage = String(this.offreDemandeObj.isEmploiApresStage);

      this.newOffreDemande = {
        titre: this.offreDemandeObj.titre,
        type: this.offreDemandeObj.type,
        debutAt: formatDate(new Date(this.offreDemandeObj.debutAt), 'yyyy-MM-dd', 'en'),
        finAt: formatDate(new Date(this.offreDemandeObj.finAt), 'yyyy-MM-dd', 'en'),
        parutionAt: this.dateParution,
        dureeStage: 'null',
        description: this.offreDemandeObj.description,
        heureParSemaine: this.offreDemandeObj.heureParSemaine,
        competencesRercherchees: String(this.offreDemandeObj.competencesRercherchees),
        isEmploiApresStage: this.offreDemandeObj.isEmploiApresStage,
        infoSupplementaires: this.offreDemandeObj.infoSupplementaires,
        programmeSuivi: this.offreDemandeObj.programmeSuivi,
        autresFormations: this.offreDemandeObj.autresFormations,
        competencesAcquises: this.offreDemandeObj.competencesAcquises,
        descriptionPosteRecherche: this.offreDemandeObj.descriptionPosteRecherche,
        typeDeStage: this.offreDemandeObj.typeDeStage,
        dureeDeStage: Math.round(this.calculDuree(this.offreDemandeObj.debutAt, this.offreDemandeObj.finAt)),
        remuneration: this.offreDemandeObj.remuneration,
        autresInformations: this.offreDemandeObj.autresInformations,
        isActif: true,
        isSupprimer: false,
        isValider: false,
        isVedette: true,
        secteur: this.secteur,
        utilisateur: this.utilisateur
      };
    });
  }

  updateOffreDemande(updateOD: NewEditOffreDemande, id): void {
   this.offreDemandeService.updateOffreDemande(updateOD, id).subscribe(r => {
     this.router.navigate(['/admin/liste', this.newOffreDemande.type]);
   });
  }

  getSecteur(): void {
    this.secteurService.getSecteur().subscribe(r => {
      this.tableSecteur = r;
    });
  }
}
