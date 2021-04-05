import {OffreDemandeUtilisateur} from './offre-demande-utilisateur';
import {OffreDemandeSecteur} from './offre-demande-secteur';

export interface OffresDemandes {
  id: number;
  titre: string;
  type: string;
  debutAt: any;
  finAt: any;
  parutionAt: any;
  dureeStage: string;
  description: string;
  heureParSemaine: number;
  competencesRercherchees: string;
  isEmploiApresStage: true;
  infoSupplementaires: string;
  autresFormations: string;
  competencesAcquises: string;
  descriptionPosteRecherche: string;
  typeDeStage: string;
  dureeDeStage: number;
  remuneration: string;
  autresInformations: string;
  isActif: boolean;
  isSupprimer: boolean;
  isValider: boolean;
  isVedette: boolean;
  utilisateur: OffreDemandeUtilisateur;
  secteur: OffreDemandeSecteur;

}
