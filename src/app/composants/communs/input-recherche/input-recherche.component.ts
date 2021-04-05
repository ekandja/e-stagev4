import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-recherche',
  templateUrl: './input-recherche.component.html',
  styleUrls: ['./input-recherche.component.css']
})
export class InputRechercheComponent implements OnInit {

  offreDemande: OffresDemandes[];
  formation: string[];
  tableauIntermediaire: string[];
  isFocusInput: boolean;
  isSelectOpen: boolean;

  formationRecherche = '';
  valeurAtrouvee = '';

  @Output() titreAtrouver = new EventEmitter();

  constructor(private http: HttpClient, private offreDemandeService: OffreDemandeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getKeyWord();
  }

  getKeyWord(): void {
    this.tableauIntermediaire = [];
    this.offreDemandeService.getOffreDemande().subscribe(r => {
      this.offreDemande = r;
      this.offreDemande = this.offreDemande
        .sort((a, b) => a.titre.localeCompare(b.titre));
      this.offreDemande.forEach(item => {
        this.tableauIntermediaire.push(item.titre);
      });
      this.formation = [...new Set(this.tableauIntermediaire)];
    });
  }

  titreSelected(event: any): void {
    this.formationRecherche = event.target.value;
    this.isFocusInput = false;
    this.valeurAtrouvee = this.formationRecherche;
    this.route.navigate(['/recherche', this.formationRecherche]);

  }

  montreSelect(): void {
    this.isFocusInput = true;
    this.isSelectOpen = true;
  }

  perteFocusInput(): void {
      this.isFocusInput = false;
  }

  rechercheOffreDemande(titre: string): void{
    this.titreAtrouver.emit(titre);
    this.route.navigate(['/recherche', titre]);
  }

}
