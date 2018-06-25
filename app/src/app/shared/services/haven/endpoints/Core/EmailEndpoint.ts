import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class EmailEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getEmailAsync(email_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'emails/{email_id}';
      request.resource = request.resource.replace(/{email_id}/g, email_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, app_label_id:any = null, account_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'emails';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["app_label_id"] =  app_label_id;
      request.params["account_id"] =  account_id;
      return this.api.execute(request);
   }
   getEmailByAppLabelAsync(app_label_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'emails/by_applabel/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getEmailByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'emails/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createEmailAsync(email:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'emails';
      request.payload = JSON.stringify(email);
      return this.api.execute(request);
   }
   updateEmailAsync(email_id:string, email:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'emails/{email_id}';
      request.resource = request.resource.replace(/{email_id}/g, email_id.toString());
      request.payload = JSON.stringify(email);
      return this.api.execute(request);
   }
   deleteEmailAsync(email_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'emails/{email_id}';
      request.resource = request.resource.replace(/{email_id}/g, email_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}