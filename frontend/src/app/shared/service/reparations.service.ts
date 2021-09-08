import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Repair } from 'src/ws_contrat/target/generated-sources/gac/models/repair';
import { ReparationImpl } from '../models/reparation-impl';
import { RepairService } from 'src/ws_contrat/target/generated-sources/gac/services/repair.service';
@Injectable({
  providedIn: 'root'
})
export class ReparationsService {

  constructor(private repairService: RepairService) { }

  postRepair(reparation: ReparationImpl): Observable<string> {
    return this.repairService.addRepair(reparation).pipe(
      map((res: string) => {
        return res;
      }),
      catchError((): Observable<string> => {
        return of (null);
      })
    )
  }

  getAllRepairs(id: string):Observable<Repair[]> {
    return this.repairService.getRepairByCarId(id).pipe(
      map((res: Repair[]) => {
        return res;
      }),
      catchError((): Observable<Repair[]> => {
        return of (null);
      })
    )
  }

  deleteRepair(id: string) {
    return this.repairService.deleteRepair(id).pipe(
      map((res: string) => {
        return res;
      }),
      catchError((): Observable<string> => {
        return of (null);
      })
    )
  }
}
