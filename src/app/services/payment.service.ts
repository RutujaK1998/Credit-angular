import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient, private router : Router) {}

  makePayment(paymentData): Observable<any> {
    const response = {
      status: 'success',
      message: 'Payment processed successfully!',
    };
    this.router.navigate(['/app']);
    return of(new HttpResponse({ status: 200, body: response }));

  }
}
