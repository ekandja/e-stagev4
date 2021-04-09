export interface NewEditUtilisateur {
  nom: string;
  prenom: string;
  isEntreprise: boolean;
  nomEntreprise: string;
  adresse: string;
  ville: string;
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
  etablissement: string;
  programmeSuivi: string;
  competencesAquises: string;
}
