import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AproposComponent } from './composants/apropos/apropos.component';
import { CarteOffreDemandeComponent } from './composants/communs/carte-offre-demande/carte-offre-demande.component';
import { ChercheursStageComponent } from './composants/communs/chercheurs-stage/chercheurs-stage.component';
import { EnteteAccueilComponent } from './composants/communs/entete-accueil/entete-accueil.component';
import { EnteteAutresPagesComponent } from './composants/communs/entete-autres-pages/entete-autres-pages.component';
import { EtapesUtilisationsComponent } from './composants/communs/etapes-utilisations/etapes-utilisations.component';
import { MenuBasComponent } from './composants/communs/menu-bas/menu-bas.component';
import { MenuHautComponent } from './composants/communs/menu-haut/menu-haut.component';
import { PiedComponent } from './composants/communs/pied/pied.component';
import { PourquoiDemanderComponent } from './composants/communs/pourquoi-demander/pourquoi-demander.component';
import { PourquoiOffrirComponent } from './composants/communs/pourquoi-offrir/pourquoi-offrir.component';
import { ZoneDemandeAfficheComponent } from './composants/communs/zone-demande-affiche/zone-demande-affiche.component';
import { ZoneOffreAfficheComponent } from './composants/communs/zone-offre-affiche/zone-offre-affiche.component';
import { ConfidentialiteComponent } from './composants/confidentialite/confidentialite.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { OffreDemandeIndividuelComponent } from './composants/listeOffresDemandes/offre-demande-individuel/offre-demande-individuel.component';
import { ToutesOffresDemandesComponent } from './composants/listeOffresDemandes/toutes-offres-demandes/toutes-offres-demandes.component';
import { NousContacterComponent } from './composants/nous-contacter/nous-contacter.component';
import { DetailDeLOffreDemandeComponent} from './composants/detailOffreDemande/detail-de-loffre-demande/detail-de-loffre-demande.component';
import { PageDeLOffreDemandeComponent } from './composants/detailOffreDemande/page-de-loffre-demande/page-de-loffre-demande.component';
import {FormsModule} from '@angular/forms';
import {OffreDemandeService} from './services/offre-demande.service';
import {SecteurService} from './services/secteur.service';
import {UtilisateurService} from './services/utilisateur.service';
import {OffreDemandeResolver} from './resolvers/offre-demande.resolver';
import {SecteursDactiviteComponent} from './composants/communs/secteurs-dactivite/secteurs-dactivite.component';
import { OffresParSecteurComponent } from './composants/listeOffresDemandes/offres-par-secteur/offres-par-secteur.component';
import { InputRechercheComponent } from './composants/communs/input-recherche/input-recherche.component';
import { AdminEditDemandeOffreComponent } from './composants/admin/admin-edit-demande-offre/admin-edit-demande-offre.component';
import { AdminFicheDuCandidatComponent } from './composants/admin/admin-fiche-du-candidat/admin-fiche-du-candidat.component';
import { AdminListeDesCandidatsComponent } from './composants/admin/admin-liste-des-candidats/admin-liste-des-candidats.component';
import { AdminCarteCandidatComponent } from './composants/admin/admin-carte-candidat/admin-carte-candidat.component';
import { AdminAttenteValidationComponent } from './composants/admin/admin-attente-validation/admin-attente-validation.component';
import { AdminOffreDemandeAttenteComponent } from './composants/admin/admin-offre-demande-attente/admin-offre-demande-attente.component';
import { AdminMenuComponent } from './composants/admin/admin-menu/admin-menu.component';
import { AdminEnteteComponent } from './composants/admin/admin-entete/admin-entete.component';
import { AdminListeAttenteComponent } from './composants/admin/admin-liste-attente/admin-liste-attente.component';
import { AdminRouteDetailStageComponent } from './composants/admin/admin-route-detail-stage/admin-route-detail-stage.component';
import { AdminRouteAttenteComponent } from './composants/admin/admin-route-attente/admin-route-attente.component';
import { AdminDetailOffreEtDemandeComponent } from './composants/admin/admin-detail-offre-et-demande/admin-detail-offre-et-demande.component';
import { AdminRouteListeCandidatComponent } from './composants/admin/admin-route-liste-candidat/admin-route-liste-candidat.component';
import { AdminRouteListeEntrepriseComponent } from './composants/admin/admin-route-liste-entreprise/admin-route-liste-entreprise.component';
import { AdminRouteOffreDemandeComponent } from './composants/admin/admin-route-offre-demande/admin-route-offre-demande.component';
import { AdminListeOffreDemandeComponent } from './composants/admin/admin-liste-offre-demande/admin-liste-offre-demande.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { AdminRouteFicheCandidatComponent } from './composants/admin/admin-route-fiche-candidat/admin-route-fiche-candidat.component';
import { AdminRouteCandidatEntpriseComponent } from './composants/admin/admin-route-candidat-entprise/admin-route-candidat-entprise.component';
import { AdminCarteCandidatEntrepriseComponent } from './composants/admin/admin-carte-candidat-entreprise/admin-carte-candidat-entreprise.component';
import { AdminListeCandidatEntrepriseComponent } from './composants/admin/admin-liste-candidat-entreprise/admin-liste-candidat-entreprise.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RechercheComponent } from './composants/recherche/recherche.component';
import { MettreEnGrasDirective } from './directives/mettre-en-gras.directive';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AproposComponent,
    CarteOffreDemandeComponent,
    ChercheursStageComponent,
    EnteteAccueilComponent,
    EnteteAutresPagesComponent,
    EtapesUtilisationsComponent,
    MenuBasComponent,
    MenuHautComponent,
    PiedComponent,
    PourquoiDemanderComponent,
    PourquoiOffrirComponent,
    ZoneDemandeAfficheComponent,
    ZoneOffreAfficheComponent,
    ConfidentialiteComponent,
    ConnexionComponent,
    OffreDemandeIndividuelComponent,
    ToutesOffresDemandesComponent,
    NousContacterComponent,
    DetailDeLOffreDemandeComponent,
    PageDeLOffreDemandeComponent,
    SecteursDactiviteComponent,
    OffresParSecteurComponent,
    InputRechercheComponent,
    AdminEditDemandeOffreComponent,
    AdminFicheDuCandidatComponent,
    AdminListeDesCandidatsComponent,
    AdminCarteCandidatComponent,
    AdminAttenteValidationComponent,
    AdminOffreDemandeAttenteComponent,
    AdminMenuComponent,
    AdminEnteteComponent,
    AdminListeAttenteComponent,
    AdminRouteDetailStageComponent,
    AdminRouteAttenteComponent,
    AdminDetailOffreEtDemandeComponent,
    AdminRouteListeCandidatComponent,
    AdminRouteListeEntrepriseComponent,
    AdminRouteOffreDemandeComponent,
    AdminListeOffreDemandeComponent,
    DateFormatPipe,
    AdminRouteFicheCandidatComponent,
    AdminRouteCandidatEntpriseComponent,
    AdminCarteCandidatEntrepriseComponent,
    AdminListeCandidatEntrepriseComponent,
    FilterPipe,
    RechercheComponent,
    MettreEnGrasDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [OffreDemandeService, SecteurService, UtilisateurService, OffreDemandeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
