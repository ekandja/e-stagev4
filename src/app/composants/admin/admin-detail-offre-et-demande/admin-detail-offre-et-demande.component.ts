import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-admin-detail-offre-et-demande',
  templateUrl: './admin-detail-offre-et-demande.component.html',
  styleUrls: ['./admin-detail-offre-et-demande.component.css']
})
export class AdminDetailOffreEtDemandeComponent implements OnInit {

  @Input() detaiOffreD: OffresDemandes;
  @Input() type: string;
  @Input() from: string;
  niveauAcces: string

  constructor() { }

  ngOnInit(): void {
    this.niveauAcces = localStorage.getItem('niveauAcces');
  }

}
