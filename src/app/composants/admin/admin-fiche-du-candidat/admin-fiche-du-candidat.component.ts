import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Utilisateur} from '../../../interfaces/utilisateur';

@Component({
  selector: 'app-admin-fiche-du-candidat',
  templateUrl: './admin-fiche-du-candidat.component.html',
  styleUrls: ['./admin-fiche-du-candidat.component.css']
})
export class AdminFicheDuCandidatComponent implements OnInit {

  @Input() candidat: Utilisateur;
  @Input() from: string;

  constructor() { }

  ngOnInit(): void {
  }

}
