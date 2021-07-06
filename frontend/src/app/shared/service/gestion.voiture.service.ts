import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionVoitureService {
  carState = new Subject<string>();

  constructor() { }

  getCarState(): Observable<string> {
    return this.carState.asObservable();
  }

  sendCarState(car: string) {
    this.carState.next(car);
  }
}
