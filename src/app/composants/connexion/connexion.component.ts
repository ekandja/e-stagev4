import {Component, OnInit} from '@angular/core';
import {Utilisateur} from '../../interfaces/utilisateur';
import {UtilisateurService} from '../../services/utilisateur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  offreDemande = 'Accéder à votre compte';
  newUtilisateur: Utilisateur;
  utilisateur: Utilisateur[];
  courrielConnexion: string;
  motDePasse: string;
  wrongPassword: boolean;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connexion(identifiant): void {
    identifiant.email = this.courrielConnexion.trim();
    identifiant.password = this.motDePasse.trim();

    this.utilisateurService.getUtilisateur().subscribe(r => {
      this.utilisateur = r;
      this.utilisateur = this.utilisateur.filter(f => (f.courriel === identifiant.email && f.motDePasse === identifiant.password));
      if (this.utilisateur.length !== 0) {

        this.wrongPassword = false;
        localStorage.isConnecter = 1;

        this.utilisateur.forEach(item => {
          localStorage.username = item.courriel;
          localStorage.password = item.motDePasse;
          localStorage.niveauAcces = item.niveauAcces;
          localStorage.nom = item.nom;
          localStorage.prenom = item.prenom;
          localStorage.nomEntreprise = item.nomEntreprise;
          localStorage.isSupprimer = item.isActif;
          localStorage.isActif = item.isActif;
          localStorage.isValider = item.isValider;
          localStorage.userID = item.id;
        });
        this.router.navigate(['/admin/attente']);
      } else {
        this.wrongPassword = true;
      }
    });

  }

  ajouterUtilisateur(utilisateur): void {
  }


}
