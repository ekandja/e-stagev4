import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-offre-demande-individuel',
  templateUrl: './offre-demande-individuel.component.html',
  styleUrls: ['./offre-demande-individuel.component.css']
})
export class OffreDemandeIndividuelComponent implements OnInit {

  @Input() offreDemande: OffresDemandes;
  constructor() { }

  ngOnInit(): void {
  }

}
