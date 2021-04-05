import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { OffreDemandeService} from '../services/offre-demande.service';
import {OffresDemandes} from '../interfaces/offre-demande';

@Injectable()
export class OffreDemandeResolver implements Resolve<OffresDemandes[]>{
  constructor(private offreDemandeService: OffreDemandeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<OffresDemandes[]> {
    return this.offreDemandeService.getOffreDemande();
  }

}
