import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CarService } from 'src/ws_contrat/target/generated-sources/gac/services/car.service';
import { Car } from 'src/ws_contrat/target/generated-sources/gac/models/car';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { VOITURE_MOCK } from '../mock/voitureMock';
import { AuthGuard } from './auth-guard';

@Injectable({
  providedIn: 'root'
})
export class GestionVoitureService {
  carState = new Subject<string>();
  voitureMock: Car = VOITURE_MOCK;

  constructor(private carService: CarService, private authGuard: AuthGuard) { }

  getCarState(): Observable<string> {
    return this.carState.asObservable();
  }

  sendCarState(car: string) {
    this.carState.next(car);
  }

  getCar(id: string): Observable<Car> {
    console.log("get car");
    return this.carService.getCarById(id).pipe(
      map((result: Car) => {
        return result;
      }),
      catchError((): Observable<Car> => {
        return of(this.voitureMock);
      })
    )
  }

  getAllCars(): Observable<Car[]> {
    console.log("get all cars");
    return this.carService.getCarsByUserId(this.authGuard.user.id).pipe(
      map((response:Car[]) => {
        return response;
      }),
      catchError((): Observable<Car[]> => {
        console.log('error');
        if (this.authGuard.mock) {
          const array = new Array<Car>(this.voitureMock);
          return of(array);
        }
        return of(null)
      }))
    }
}
