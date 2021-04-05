import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccueilComponent} from './composants/accueil/accueil.component';
import {AproposComponent} from './composants/apropos/apropos.component';
import {NousContacterComponent} from './composants/nous-contacter/nous-contacter.component';
import {ConfidentialiteComponent} from './composants/confidentialite/confidentialite.component';
import {ConnexionComponent} from './composants/connexion/connexion.component';
import {ToutesOffresDemandesComponent} from './composants/listeOffresDemandes/toutes-offres-demandes/toutes-offres-demandes.component';
import {OffreDemandeResolver} from './resolvers/offre-demande.resolver';
import { PageDeLOffreDemandeComponent } from './composants/detailOffreDemande/page-de-loffre-demande/page-de-loffre-demande.component';
import {OffresParSecteurComponent} from './composants/listeOffresDemandes/offres-par-secteur/offres-par-secteur.component';
import {AdminRouteAttenteComponent} from './composants/admin/admin-route-attente/admin-route-attente.component';
import {AdminRouteDetailStageComponent} from './composants/admin/admin-route-detail-stage/admin-route-detail-stage.component';
import {AdminRouteOffreDemandeComponent} from './composants/admin/admin-route-offre-demande/admin-route-offre-demande.component';
import {AdminRouteFicheCandidatComponent} from './composants/admin/admin-route-fiche-candidat/admin-route-fiche-candidat.component';
import {AdminRouteCandidatEntpriseComponent} from './composants/admin/admin-route-candidat-entprise/admin-route-candidat-entprise.component';
import {RechercheComponent} from './composants/recherche/recherche.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, resolve: {'': OffreDemandeResolver}},
  {path: 'offres_demandes/:type', component: ToutesOffresDemandesComponent, resolve: {
      'offres_demandes/:type': OffreDemandeResolver
    }},
  {path: 'offres_par_secteur/:id', component: OffresParSecteurComponent},
  {path: 'detail_offre_demande/:type/:id', component: PageDeLOffreDemandeComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'nous_joindre', component: NousContacterComponent},
  {path: 'confidentialite', component: ConfidentialiteComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'connexion/:type', component: ConnexionComponent},
  {path: 'admin/attente', component: AdminRouteAttenteComponent},
  {path: 'admin/detail/:type/:from/:id', component: AdminRouteDetailStageComponent},
  {path: 'admin/carte/:liste', component: AdminRouteCandidatEntpriseComponent},
  {path: 'admin/liste/:type', component: AdminRouteOffreDemandeComponent},
  {path: 'admin/fiche/:from/:id', component: AdminRouteFicheCandidatComponent},
  {path: 'recherche/:titre', component: RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
