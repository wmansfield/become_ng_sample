import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ThreadResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getThreadResponseAsync(thread_id:string, thread_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threadresponses/{thread_id}/{thread_response_id}';
      request.resource = request.resource.replace(/{thread_response_id}/g, thread_response_id.toString());
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      return this.api.execute(request);
   }
   getThreadResponseByThreadAsync(thread_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threadresponses/by_thread/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getThreadResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threadresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createThreadResponseAsync(threadresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threadresponses';
      request.payload = JSON.stringify(threadresponse);
      return this.api.execute(request);
   }
   updateThreadResponseAsync(thread_response_id:string, threadresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'threadresponses/{thread_response_id}';
      request.resource = request.resource.replace(/{thread_response_id}/g, thread_response_id.toString());
      request.payload = JSON.stringify(threadresponse);
      return this.api.execute(request);
   }
   deleteThreadResponseAsync(thread_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'threadresponses/{thread_response_id}';
      request.resource = request.resource.replace(/{thread_response_id}/g, thread_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}