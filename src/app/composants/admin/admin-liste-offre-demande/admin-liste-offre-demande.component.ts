import {Component, OnInit} from '@angular/core';
import {OffresDemandes} from '../../../interfaces/offre-demande';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreDemandeService} from '../../../services/offre-demande.service';

@Component({
  selector: 'app-admin-liste-offre-demande',
  templateUrl: './admin-liste-offre-demande.component.html',
  styleUrls: ['./admin-liste-offre-demande.component.css']
})
export class AdminListeOffreDemandeComponent implements OnInit {

  liste: OffresDemandes[];
  type: string;
  titrePage: string;
  userID: string;
  noData: boolean;

  constructor(private route: ActivatedRoute, private offreDemandeService: OffreDemandeService,
              private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.userID = localStorage.getItem('userID');
    this.getOffreDemande();
  }

  getOffreDemande(): void {

    if (!localStorage.getItem('isConnecter')) {
      localStorage.nonAutorise = '1';
      this.router.navigate(['/']);
    } else {

      this.type = this.route.snapshot.paramMap.get('type');

      if (this.type === 'Demande') {
        if (localStorage.getItem('niveauAcces') === '111' || localStorage.getItem('niveauAcces') === '999') {
          this.titrePage = 'Demandes de stages';
          this.type = 'Demande';
        } else {
          localStorage.nonAutorise = '1';
          this.router.navigate(['/']);
        }
      } else if (this.type === 'Offre') {
        if (localStorage.getItem('niveauAcces') === '333' || localStorage.getItem('niveauAcces') === '999') {
          this.titrePage = 'Offres de stages';
          this.type = 'Offre';
        } else {
          localStorage.nonAutorise = '1';
          this.router.navigate(['/']);
        }
      }

      if (localStorage.getItem('niveauAcces') !== '999') {
        this.offreDemandeService.getOffreDemande().subscribe(r => {
          this.liste = r;
          if (this.liste.length === 0) {
            this.noData = true;
          } else {
            this.liste = this.liste.filter(f => (f.type === this.type && f.isValider && f.utilisateur.id === Number(this.userID)));
          }
        });
      } else {
        this.offreDemandeService.getOffreDemande().subscribe(r => {
          this.liste = r;
          if (this.liste.length === 0) {
            this.noData = true;
          } else {
            this.liste = this.liste.filter(f => (f.type === this.type && f.isValider));
          }
        });
      }
    }
  }
}
