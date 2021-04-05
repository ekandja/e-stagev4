import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-route-offre-demande',
  templateUrl: './admin-route-offre-demande.component.html',
  styleUrls: ['./admin-route-offre-demande.component.css']
})
export class AdminRouteOffreDemandeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('isConnecter')){
      localStorage.nonAutorise = '1';
      this.router.navigate(['/']);
    }
  }

}
