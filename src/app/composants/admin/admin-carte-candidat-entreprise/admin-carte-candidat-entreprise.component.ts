import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Utilisateur} from '../../../interfaces/utilisateur';

@Component({
  selector: 'app-admin-carte-candidat-entreprise',
  templateUrl: './admin-carte-candidat-entreprise.component.html',
  styleUrls: ['./admin-carte-candidat-entreprise.component.css']
})
export class AdminCarteCandidatEntrepriseComponent implements OnInit {

  @Input() candidat: Utilisateur;
  @Input() carte: string;

  constructor() { }

  ngOnInit(): void {
  }

}
