import {Component, OnInit} from '@angular/core';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NewEditOffreDemande} from '../../../interfaces/new-edit-offre-demande';
import {formatDate} from '@angular/common';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Secteur} from '../../../interfaces/secteur';
import {SecteurService} from '../../../services/secteur.service';

@Component({
  selector: 'app-admin-ajout-edit-offre-demande',
  templateUrl: './admin-ajout-edit-offre-demande.component.html',
  styleUrls: ['./admin-ajout-edit-offre-demande.component.css'],
})
export class AdminAjoutEditOffreDemandeComponent implements OnInit {


  isActif: boolean;
  isSupprimer: boolean;
  isValider: boolean;
  isVedette: boolean;
  dureeDeStage: number;
  secteur: string;
  utilisateur: string;

  ajoutDemande: string;
  titrePage: string;
  dateParution: any;
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
      this.titrePage = 'Ajout d\'une offre de stage';
      this.newOffreDemande.type = 'Offre';
    }
    if (this.ajoutDemande === 'demande') {
      this.titrePage = 'Ajout d\'une demande de stage';
      this.newOffreDemande.type = 'Demande';
    }
    this.getSecteur();
  }

  calculDuree(dateDebut, dateFin): number {
    dateDebut = new Date(dateDebut);
    dateFin = new Date(dateFin);
    return (dateFin.valueOf() - dateDebut.valueOf()) / (1000 * 3600 * 24);
  }

  ajoutOffreDemande(): void {
    this.dateParution = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.userID = localStorage.getItem('userID');
    this.utilisateur = 'api/utilisateurs/' + this.userID;
    this.secteur = '/api/secteurs/' + String(this.secteurID);

    this.newOffreDemande = {
      titre: this.newOffreDemande.titre,
      type: this.newOffreDemande.type,
      debutAt: this.newOffreDemande.debutAt,
      finAt: this.newOffreDemande.finAt,
      parutionAt: this.dateParution,
      dureeStage: 'null',
      description: this.newOffreDemande.description,
      heureParSemaine: this.newOffreDemande.heureParSemaine,
      competencesRercherchees: this.newOffreDemande.competencesRercherchees,
      isEmploiApresStage: Boolean(this.newOffreDemande.isEmploiApresStage),
      infoSupplementaires: this.newOffreDemande.infoSupplementaires,
      programmeSuivi: this.newOffreDemande.programmeSuivi,
      autresFormations: this.newOffreDemande.autresFormations,
      competencesAcquises: this.newOffreDemande.competencesAcquises,
      descriptionPosteRecherche: this.newOffreDemande.descriptionPosteRecherche,
      typeDeStage: this.newOffreDemande.typeDeStage,
      dureeDeStage: this.calculDuree(this.newOffreDemande.debutAt, this.newOffreDemande.finAt),
      remuneration: this.newOffreDemande.remuneration,
      autresInformations: this.newOffreDemande.autresInformations,
      isActif: true,
      isSupprimer: false,
      isValider: false,
      isVedette: true,
      secteur: this.secteur,
      utilisateur: this.utilisateur
    };

    this.offreDemandeService.addOffreDemande(this.newOffreDemande).subscribe(r => {
        this.router.navigate(['/admin/liste', this.newOffreDemande.type]);
    });
  }

  getSecteur(): void {
    this.secteurService.getSecteur().subscribe(r => {
      this.tableSecteur = r;
    });
  }





}
