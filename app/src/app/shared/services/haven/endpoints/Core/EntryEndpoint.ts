import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class EntryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   setLike(entry_id:string, like:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entrys/set_like/{entry_id}/{like}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.resource = request.resource.replace(/{like}/g, like.toString());
      return this.api.execute(request);
   }
   addEntryAsync(entry:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entrys/add';
      request.payload = JSON.stringify(entry);
      return this.api.execute(request);
   }
   getEntryByThreadPagedAsync(thread_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entrys/paged_by_thread/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   changeEntryAsync(entry_id:string, entry:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'entrys/change/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.payload = JSON.stringify(entry);
      return this.api.execute(request);
   }
   removeEntryAsync(entry_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'entrys/remove/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      return this.api.execute(request);
   }
   getVisibleRank(thread_id:string, rank:number) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entrys/visible_rank/{thread_id}/{rank}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{rank}/g, rank.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getEntryAsync(entry_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entrys/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      return this.api.execute(request);
   }
   getEntryByThreadAsync(thread_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entrys/by_thread/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getEntryByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entrys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createEntryAsync(entry:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entrys';
      request.payload = JSON.stringify(entry);
      return this.api.execute(request);
   }
   updateEntryAsync(entry_id:string, entry:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'entrys/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.payload = JSON.stringify(entry);
      return this.api.execute(request);
   }
   updateEntryRankAsync(entry_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entrys/{entry_id}/update_rank/{priority}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteEntryAsync(entry_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'entrys/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}