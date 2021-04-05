import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-entete-autres-pages',
  templateUrl: './entete-autres-pages.component.html',
  styleUrls: ['./entete-autres-pages.component.css']
})
export class EnteteAutresPagesComponent implements OnInit {

  @Input() offreDemande: string;

  @Output() envoieTitre = new EventEmitter();


  constructor() { }

  ngOnInit(): void {}

  trouverParTitre(titre: string): void {
    this.envoieTitre.emit(titre);
  }

}
