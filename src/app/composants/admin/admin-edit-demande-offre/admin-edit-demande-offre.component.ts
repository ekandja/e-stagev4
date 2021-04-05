import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-admin-edit-demande-offre',
  templateUrl: './admin-edit-demande-offre.component.html',
  styleUrls: ['./admin-edit-demande-offre.component.css']
})
export class AdminEditDemandeOffreComponent implements OnInit {

  @Input() liste: OffresDemandes;

  constructor() { }

  ngOnInit(): void {
  }

}
