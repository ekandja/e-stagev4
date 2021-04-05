import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-carte-offre-demande',
  templateUrl: './carte-offre-demande.component.html',
  styleUrls: ['./carte-offre-demande.component.css']
})
export class CarteOffreDemandeComponent implements OnInit {

  @Input() offreDemandeCarte: OffresDemandes;

  constructor() { }

  ngOnInit(): void {
  }

}
