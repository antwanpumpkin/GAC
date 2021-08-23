import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { VoitureService } from 'src/ws_contrat/target/generated-sources/gac/services';
import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { VOITURE_MOCK } from '../mock/voitureMock';

@Injectable({
  providedIn: 'root'
})
export class GestionVoitureService {
  carState = new Subject<string>();
  voitureMock: Voiture = VOITURE_MOCK;

  constructor(private voitureService: VoitureService) { }

  getCarState(): Observable<string> {
    return this.carState.asObservable();
  }

  sendCarState(car: string) {
    this.carState.next(car);
  }

  getCar(id: string): Observable<Voiture> {
    console.log("get car");
    return this.voitureService.getCarById(id).pipe(
      map((result: Voiture) => {
        return result;
      }),
      catchError((): Observable<Voiture> => {
        return of(this.voitureMock);
      })
    )
  }

  getAllCars(): Observable<Voiture[]> {
    console.log("get all cars");
    return this.voitureService.getCarsByUserId("00000000-0000-0000-0000-000000000001").pipe(
      map((response:Voiture[]) => {
        return response;
      }),
      catchError((): Observable<Voiture[]> => {
        console.log('error');
        const array = new Array<Voiture>(this.voitureMock);
        return of(array);
      }))
    }
}
