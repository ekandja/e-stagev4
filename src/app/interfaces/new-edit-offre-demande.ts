export interface NewEditOffreDemande {
  titre: string;
  type: string;
  debutAt: string;
  finAt: string;
  parutionAt: string;
  dureeStage: string;
  description: string;
  heureParSemaine: number;
  competencesRercherchees: string;
  isEmploiApresStage: boolean;
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
  secteur: string;
  utilisateur: string;
}
