import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-entete-accueil',
  templateUrl: './entete-accueil.component.html',
  styleUrls: ['./entete-accueil.component.css']
})
export class EnteteAccueilComponent implements OnInit {

  @Input() offreDemande: string;
  @Output() envoieTitre = new EventEmitter();


  constructor() { }

  ngOnInit(): void {}

  trouverParTitre(titre: string): void {
    this.envoieTitre.emit(titre);
  }






}
