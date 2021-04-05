import {SecteurUtilisateur} from './secteur-utilisateur';

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  isEntreprise: boolean;
  nomEntreprise: string;
  adresse: string;
  ville: string;
  etablissement: string;
  programmeSuivi: string;
  region: string;
  logo: string;
  courriel: string;
  telephone: string;
  siteWeb: string;
  cv: string;
  motDePasse: string;
  isActif: boolean;
  isSupprimer: boolean;
  isValider: boolean;
  niveauAcces: number;
  competencesAquises: string;
  secteur: SecteurUtilisateur;
}

