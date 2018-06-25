import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class EntryReplyEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getEntryReplyAsync(entry_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryreplys/{entry_reply_id}';
      request.resource = request.resource.replace(/{entry_reply_id}/g, entry_reply_id.toString());
      return this.api.execute(request);
   }
   getEntryReplyByEntryOrigAsync(entry_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryreplys/by_entryorig/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getEntryReplyByEntryReplyAsync(entry_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryreplys/by_entryreply/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createEntryReplyAsync(entryreply:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entryreplys';
      request.payload = JSON.stringify(entryreply);
      return this.api.execute(request);
   }
   updateEntryReplyAsync(entry_reply_id:string, entryreply:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'entryreplys/{entry_reply_id}';
      request.resource = request.resource.replace(/{entry_reply_id}/g, entry_reply_id.toString());
      request.payload = JSON.stringify(entryreply);
      return this.api.execute(request);
   }
   deleteEntryReplyAsync(entry_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'entryreplys/{entry_reply_id}';
      request.resource = request.resource.replace(/{entry_reply_id}/g, entry_reply_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}