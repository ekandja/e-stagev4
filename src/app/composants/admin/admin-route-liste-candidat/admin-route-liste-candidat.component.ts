import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {ActivatedRoute} from '@angular/router';
import {OffreDemandeService} from '../../../services/offre-demande.service';

@Component({
  selector: 'app-admin-route-liste-candidat',
  templateUrl: './admin-route-liste-candidat.component.html',
  styleUrls: ['./admin-route-liste-candidat.component.css']
})
export class AdminRouteListeCandidatComponent implements OnInit {

  id: string;
  fiche: OffresDemandes[];

  constructor(private offreDemandeService: OffreDemandeService, private route: ActivatedRoute) { }

   ngOnInit(): void {
    this.getOffreDemande();
  }

  getOffreDemande(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.fiche = r;
      this.fiche = this.fiche.filter(f => (f.id === Number(this.id)));
    });
  }


}
