import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class LoginHistoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getLoginHistoryAsync(history_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'loginhistorys/{history_id}';
      request.resource = request.resource.replace(/{history_id}/g, history_id.toString());
      return this.api.execute(request);
   }
   getLoginHistoryByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'loginhistorys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createLoginHistoryAsync(loginhistory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'loginhistorys';
      request.payload = JSON.stringify(loginhistory);
      return this.api.execute(request);
   }
   updateLoginHistoryAsync(history_id:string, loginhistory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'loginhistorys/{history_id}';
      request.resource = request.resource.replace(/{history_id}/g, history_id.toString());
      request.payload = JSON.stringify(loginhistory);
      return this.api.execute(request);
   }
   deleteLoginHistoryAsync(history_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'loginhistorys/{history_id}';
      request.resource = request.resource.replace(/{history_id}/g, history_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}