import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { HavenRequest } from './haven-request';
import { HavenEndpoints } from './haven-endpoints';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class HavenSDK extends HavenEndpoints {
   private baseUrl: string;
   private account: any;
   private storage: Storage;

   constructor(
      private http: Http) 
   {
      super();

      this.storage = localStorage;
      this.baseUrl = 'https://app.socialhaven.com/api';
      this.constructEndpoints(this);
   }

   setAccount(account:any): void {
      this.storage.setItem('account', account);
      this.setAccountData(account);
   }
   clearAccount(): any {
      this.storage.removeItem('account');
      return this.Auth.logoutAsync();
   }
   private setAccountData(account) {
      const changed = !this.account || this.account.account_id == account.account_id;

      this.account = account;
      for (const member of account.factions_member) {
         if(member.subscription_enabled){
            this.account.has_subscription = true;
            break;
         }
      }
      for (const manager of account.factions_manager) {
         if(manager.subscription_enabled){
            this.account.has_subscription = true;
            break;
         }
      }
      if(changed){
         //TODO: Notify the app that we've changed?
      }
   }
   instantAccount(){
      return this.account;
   }
   ensureAccount(): Observable<any> {
      return new Observable(observer => {
         if (!this.account)
            if (this.storage.getItem('account')) {
               this.Account.getSelfAsync()
                  .subscribe(
                     data => {
                        if (data.success) {
                           this.setAccountData(data.item);
                           observer.next(data.item);
                           observer.complete();
                        } else {
                           observer.error(data.message);
                        }
                     },
                     error => {
                        observer.error(error.message);
                     }
                  );
            } else {
               observer.error(false);
            }
         else {
            observer.next(this.account);
            observer.complete();
         }
      });
   }

   execute(request: HavenRequest): Observable<any> {
      const self = this;
      var data;

      data = request.payload || request.params;

      if (!request.payload)
         for (const key in data)
            if (data[key] === null)
               data[key] = '';

      const observable = this.http.request(
         new Request({
            withCredentials: true,
            method: request.method,
            url: `${self.baseUrl}/${request.resource}`,
            body: data,
            headers: this.generateHeaders(),
            params: request.params
         })
      );

      return observable
         .map(result => result.json())
         .pipe(catchError(this.mapError));
   }

   private mapError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         return new ErrorObservable(error.error.message);
      } else {
         if (error.statusText && error.statusText[0] === '{') {
            return new ErrorObservable(JSON.parse(error.statusText).message);
         } else {
            return new ErrorObservable(error.statusText);
         }
      }
   };

   private generateHeaders(): any {
      const result = {};
      result['X-DevicePlatform'] = 'become.angular.v1';
      return result;
   }

}
