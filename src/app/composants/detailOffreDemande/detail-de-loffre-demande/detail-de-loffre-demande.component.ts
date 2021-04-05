import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-detail-de-loffre-demande',
  templateUrl: './detail-de-loffre-demande.component.html',
  styleUrls: ['./detail-de-loffre-demande.component.css']
})
export class DetailDeLOffreDemandeComponent implements OnInit {

  @Input() offreDemandeDetail: OffresDemandes;
  @Input() dateDebut: string;
  @Input() dateFin: string;
  @Input() emploi: string;

  constructor() { }

  ngOnInit(): void {
  }

}
