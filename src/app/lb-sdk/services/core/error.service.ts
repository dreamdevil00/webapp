/* tslint:disable */
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse): Observable<never> {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${errorResponse.error.message}`);
    } else {
      console.error(
        `Backend returned code ${errorResponse.status}, body was: ${
          errorResponse.error
        }`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
