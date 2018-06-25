import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class EntryFileEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getEntryFileAsync(entry_file_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryfiles/{entry_file_id}';
      request.resource = request.resource.replace(/{entry_file_id}/g, entry_file_id.toString());
      return this.api.execute(request);
   }
   getEntryFileByEntryAsync(entry_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryfiles/by_entry/{entry_id}';
      request.resource = request.resource.replace(/{entry_id}/g, entry_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getEntryFileByFactionFileAsync(faction_file_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'entryfiles/by_factionfile/{faction_file_id}';
      request.resource = request.resource.replace(/{faction_file_id}/g, faction_file_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createEntryFileAsync(entryfile:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'entryfiles';
      request.payload = JSON.stringify(entryfile);
      return this.api.execute(request);
   }
   updateEntryFileAsync(entry_file_id:string, entryfile:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'entryfiles/{entry_file_id}';
      request.resource = request.resource.replace(/{entry_file_id}/g, entry_file_id.toString());
      request.payload = JSON.stringify(entryfile);
      return this.api.execute(request);
   }
   deleteEntryFileAsync(entry_file_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'entryfiles/{entry_file_id}';
      request.resource = request.resource.replace(/{entry_file_id}/g, entry_file_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}