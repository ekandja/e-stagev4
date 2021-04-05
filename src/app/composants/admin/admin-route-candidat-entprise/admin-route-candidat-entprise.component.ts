import { Component, OnInit } from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-route-candidat-entprise',
  templateUrl: './admin-route-candidat-entprise.component.html',
  styleUrls: ['./admin-route-candidat-entprise.component.css']
})
export class AdminRouteCandidatEntpriseComponent implements OnInit {

  liste: OffresDemandes[];
  listeType: string;
  carte: string;
  type: string;

  constructor(private offreDemandeService: OffreDemandeService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getOffreDemande();
  }

  getOffreDemande(): void {
    this.listeType = this.route.snapshot.paramMap.get('liste');

    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.liste = r;

    });
  }

}
