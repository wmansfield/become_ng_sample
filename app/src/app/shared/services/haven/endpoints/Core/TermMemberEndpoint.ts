import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TermMemberEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTermMemberAsync(term_member_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termmembers/{term_member_id}';
      request.resource = request.resource.replace(/{term_member_id}/g, term_member_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, term_id:any = null, account_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termmembers';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["term_id"] =  term_id;
      request.params["account_id"] =  account_id;
      return this.api.execute(request);
   }
   getTermMemberByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termmembers/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getTermMemberByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termmembers/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTermMemberAsync(termmember:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'termmembers';
      request.payload = JSON.stringify(termmember);
      return this.api.execute(request);
   }
   updateTermMemberAsync(term_member_id:string, termmember:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'termmembers/{term_member_id}';
      request.resource = request.resource.replace(/{term_member_id}/g, term_member_id.toString());
      request.payload = JSON.stringify(termmember);
      return this.api.execute(request);
   }
   deleteTermMemberAsync(term_member_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'termmembers/{term_member_id}';
      request.resource = request.resource.replace(/{term_member_id}/g, term_member_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}