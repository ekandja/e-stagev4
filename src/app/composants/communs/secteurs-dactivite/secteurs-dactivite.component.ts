import {Component, Input, OnInit} from '@angular/core';
import {Secteur} from '../../../interfaces/secteur';

@Component({
  selector: 'app-secteurs-dactivite',
  templateUrl: './secteurs-dactivite.component.html',
  styleUrls: ['./secteurs-dactivite.component.css']
})
export class SecteursDactiviteComponent implements OnInit {

  @Input() secteur: Secteur;

  constructor() { }

  ngOnInit(): void {
  }

}
