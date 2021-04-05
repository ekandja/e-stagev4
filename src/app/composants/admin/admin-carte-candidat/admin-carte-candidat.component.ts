import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-admin-carte-candidat',
  templateUrl: './admin-carte-candidat.component.html',
  styleUrls: ['./admin-carte-candidat.component.css']
})
export class AdminCarteCandidatComponent implements OnInit {

  @Input() candidat: OffresDemandes;

  constructor() { }

  ngOnInit(): void {
  }

}
