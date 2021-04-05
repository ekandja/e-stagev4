import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../../../interfaces/utilisateur';
import {UtilisateurService} from '../../../services/utilisateur.service';

@Component({
  selector: 'app-admin-route-fiche-candidat',
  templateUrl: './admin-route-fiche-candidat.component.html',
  styleUrls: ['./admin-route-fiche-candidat.component.css']
})
export class AdminRouteFicheCandidatComponent implements OnInit {

  id: string;
  utilisateur: Utilisateur[];
  from: string;

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.getUtilisateur();
  }

  getUtilisateur(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.from = this.route.snapshot.paramMap.get('from');

    if (this.from === 'attente') {
      this.from = 'attente';
    } else if (this.from === 'liste') {
      this.from = 'liste/Demande';
    }

    this.utilisateurService.getUtilisateur().subscribe(r => {
      this.utilisateur = r;
      this.utilisateur = this.utilisateur.filter(f => (f.id === Number(this.id)));
    });

  }
}
