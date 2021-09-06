import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Reparation } from 'src/ws_contrat/target/generated-sources/gac/models/reparation';
import { ReparationImpl } from '../models/reparation-impl';
import { ReparationService } from 'src/ws_contrat/target/generated-sources/gac/services/reparation.service';
@Injectable({
  providedIn: 'root'
})
export class ReparationsService {

  constructor(private reparationService: ReparationService) { }

  postRepair(reparation: ReparationImpl): Observable<string> {
    return this.reparationService.reparation(reparation).pipe(
      map((res: string) => {
        return res;
      }),
      catchError((): Observable<string> => {
        return of (null);
      })
    )
  }

  getAllRepairs(id: string):Observable<Reparation[]> {
    return this.reparationService.getReparationByCarId(id).pipe(
      map((res: Reparation[]) => {
        return res;
      }),
      catchError((): Observable<Reparation[]> => {
        return of (null);
      })
    )
  }

  deleteRepair(id: string) {
    return this.reparationService.deleteReparation(id).pipe(
      map((res: string) => {
        return res;
      }),
      catchError((): Observable<string> => {
        return of (null);
      })
    )
  }
}
