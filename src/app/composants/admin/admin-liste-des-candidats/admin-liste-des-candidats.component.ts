import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {ActivatedRoute} from '@angular/router';
import {OffreDemandeService} from '../../../services/offre-demande.service';

@Component({
  selector: 'app-admin-liste-des-candidats',
  templateUrl: './admin-liste-des-candidats.component.html',
  styleUrls: ['./admin-liste-des-candidats.component.css']
})
export class AdminListeDesCandidatsComponent implements OnInit {

  liste: OffresDemandes[];
  @Input() carte: string;

  constructor(private route: ActivatedRoute, private offreDemandeService: OffreDemandeService) { }

  ngOnInit(): void {
    this.getOffreDemande();
  }

  getOffreDemande(): void {
    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.liste = r;
      this.liste = this.liste.filter(f => (f.type === 'Demande' && f.isValider === true));
    });
  }

}
