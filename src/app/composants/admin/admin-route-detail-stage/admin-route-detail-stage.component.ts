import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreDemandeService} from '../../../services/offre-demande.service';
import {OffresDemandes} from '../../../interfaces/offre-demande';

@Component({
  selector: 'app-admin-route-detail-stage',
  templateUrl: './admin-route-detail-stage.component.html',
  styleUrls: ['./admin-route-detail-stage.component.css']
})
export class AdminRouteDetailStageComponent implements OnInit {

  id: string;
  type: string;
  from: string;
  typeMessage: string;

  detailOD: OffresDemandes[];

  constructor(private route: ActivatedRoute, private offreDemandeService: OffreDemandeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getOffreDemande();
  }

  getOffreDemande(): void {

    if (!localStorage.getItem('isConnecter')) {
      localStorage.nonAutorise = '1';
      this.router.navigate(['/']);
    } else {


      this.id = this.route.snapshot.paramMap.get('id');
      this.type = this.route.snapshot.paramMap.get('type');
      this.from = this.route.snapshot.paramMap.get('from');

      if (this.type === 'Demande') {
        this.typeMessage = 'Détail de la demande de stage';
      } else if (this.type === 'Offre') {
        this.typeMessage = 'Détail de l\'offre de stage';
      }

      if (this.from === 'attente') {
        this.from = 'attente';
      } else if (this.from === 'liste') {
        this.from = 'liste/' + this.type;
      }

      this.offreDemandeService.getOffreDemande().subscribe(r => {
        this.detailOD = r;
        this.detailOD = this.detailOD.filter(f => (f.id === Number(this.id)));
      });
    }
  }
}
