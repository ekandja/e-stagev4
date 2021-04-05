import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.component.html',
  styleUrls: ['./confidentialite.component.css']
})
export class ConfidentialiteComponent implements OnInit {
  offreDemande = 'Politique de confidentialité';
  constructor() { }

  ngOnInit(): void {
  }

}
