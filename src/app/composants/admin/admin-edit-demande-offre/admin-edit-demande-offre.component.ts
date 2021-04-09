import {Component, Input, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-edit-demande-offre',
  templateUrl: './admin-edit-demande-offre.component.html',
  styleUrls: ['./admin-edit-demande-offre.component.css']
})
export class AdminEditDemandeOffreComponent implements OnInit {

  @Input() liste: OffresDemandes;

  constructor(private offreDemandeService: OffreDemandeService, private router: Router) { }

  ngOnInit(): void {
  }
  modifOffreDemande(action, id): void {
    this.router.navigate(['/admin/modification', action, id]);
  }
  supprimerOffreDemande(id): void{
    this.offreDemandeService.deleteOffreDemande(id).subscribe(r => {
      this.router.navigate([this.router.url]);
    });
  }
}
