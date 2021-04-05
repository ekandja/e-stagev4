export interface PutOffreDemande {
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
  programmeSuivi: string;
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
  utilisateur: string;
  secteur: string;
}
