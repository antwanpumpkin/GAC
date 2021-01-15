import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
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
        console.log(req);
        const header = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
        return next.handle(
            req.clone({
                headers: header
            }))
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.handleAuthError(error);
                    return throwError;
                }));
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        console.log(err);
        throw err;
    }
}
