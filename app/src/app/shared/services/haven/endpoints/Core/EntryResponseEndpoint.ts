import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class EntryResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getEntryResponseAsync(entry_id:string, entry_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryresponses/{entry_id}/{entry_response_id}';
      request.resource = request.resource.replace(/{entry_response_id}/g, entry_response_id.toString());
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      return this.api.execute(request);
   }
   getEntryResponseByEntryAsync(entry_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryresponses/by_entry/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getEntryResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createEntryResponseAsync(entryresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entryresponses';
      request.payload = JSON.stringify(entryresponse);
      return this.api.execute(request);
   }
   updateEntryResponseAsync(entry_response_id:string, entryresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'entryresponses/{entry_response_id}';
      request.resource = request.resource.replace(/{entry_response_id}/g, entry_response_id.toString());
      request.payload = JSON.stringify(entryresponse);
      return this.api.execute(request);
   }
   deleteEntryResponseAsync(entry_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'entryresponses/{entry_response_id}';
      request.resource = request.resource.replace(/{entry_response_id}/g, entry_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}