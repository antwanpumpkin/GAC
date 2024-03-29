import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HttpServiceInterceptor implements HttpInterceptor {
    constructor(
    ) {
        this.initInterceptor();
    }


    initInterceptor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url != "assets/json/carlist.json" && req.url != "assets/json/reparations.json") {
            console.log(req);
            const header = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
            return next.handle(
                req.clone({
                    url: environment.urlBe + req.url,
                    headers: header
                }))
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        this.handleAuthError(error);
                        return throwError;
                    }));
        }
        else {
            return next.handle(req)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        this.handleAuthError(error);
                        return throwError;
                    }));
        }
    }

    private handleAuthError(err: HttpErrorResponse): Observable < any > {
    console.log(err);
    throw err;
}
}
