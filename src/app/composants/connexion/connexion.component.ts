import {Component, OnInit} from '@angular/core';
import {Utilisateur} from '../../interfaces/utilisateur';
import {UtilisateurService} from '../../services/utilisateur.service';
import {Router} from '@angular/router';
import {NewEditUtilisateur} from '../../interfaces/new-edit-utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  offreDemande = 'Accéder à votre compte';
  newUtilisateur: NewEditUtilisateur;
  utilisateur: Utilisateur[];
  courrielConnexion: string;
  motDePasse: string;
  wrongPassword: boolean;
  isConfirmationCourriel: boolean;
  isConfirmationPassword: boolean;
  courrielConfirme: string;
  motDePasseConfirme: string;
  statutUtilisateur: string;
  isCourrielExist: boolean;
  isNouveauAjouter: boolean;


  constructor(private utilisateurService: UtilisateurService, private router: Router) {
  }

  ngOnInit(): void {
    this.newUtilisateur = {
      nom: '',
      prenom: '',
      isEntreprise: true,
      nomEntreprise: '',
      adresse: '',
      ville: '',
      region: '',
      logo: '',
      courriel: '',
      telephone: '',
      siteWeb: '',
      cv: '',
      motDePasse: '',
      isActif: true,
      isSupprimer: true,
      isValider: true,
      niveauAcces: 0,
      etablissement: '',
      programmeSuivi: '',
      competencesAquises: '',
    };
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
        if (localStorage.getItem('niveauAcces') === '999'){
          this.router.navigate(['/admin/attente']);
        } else {
          this.router.navigate(['/admin/fiche', 'profil', localStorage.getItem('userID')]);
        }
        } else {
        this.wrongPassword = true;
      }
    });

  }

  ajouterUtilisateur(): void {

    if (this.newUtilisateur.motDePasse !== this.motDePasseConfirme) {
      this.isConfirmationPassword = true;
    }

    if (this.newUtilisateur.courriel !== this.courrielConfirme) {
      this.isConfirmationCourriel = true;
    }
    this.utilisateurService.getUtilisateur().subscribe(r1 => {
      this.utilisateur = r1;
      this.utilisateur = this.utilisateur.filter(f => (f.courriel === this.newUtilisateur.courriel));
      if (this.utilisateur.length !== 0) {
        this.isCourrielExist = true;
      }
    });
    if (!this.isConfirmationCourriel && !this.isConfirmationPassword && !this.isCourrielExist) {

      if (this.statutUtilisateur === 'etudiant') {
        this.newUtilisateur.isEntreprise = false;
        this.newUtilisateur.niveauAcces = 111;
      }
      if (this.statutUtilisateur === 'entreprise') {
        this.newUtilisateur.isEntreprise = true;
        this.newUtilisateur.niveauAcces = 333;
      }

      this.utilisateurService.addUtilisateur(this.newUtilisateur).subscribe(r => {
        this.isNouveauAjouter = true;
      });

    }


  }


}
