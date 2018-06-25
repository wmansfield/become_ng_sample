import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionFileEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFactionFileAsync(faction_file_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionfiles/{faction_file_id}';
      request.resource = request.resource.replace(/{faction_file_id}/g, faction_file_id.toString());
      return this.api.execute(request);
   }
   getFactionFileByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionfiles/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFactionFileAsync(factionfile:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factionfiles';
      request.payload = JSON.stringify(factionfile);
      return this.api.execute(request);
   }
   updateFactionFileAsync(faction_file_id:string, factionfile:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionfiles/{faction_file_id}';
      request.resource = request.resource.replace(/{faction_file_id}/g, faction_file_id.toString());
      request.payload = JSON.stringify(factionfile);
      return this.api.execute(request);
   }
   deleteFactionFileAsync(faction_file_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factionfiles/{faction_file_id}';
      request.resource = request.resource.replace(/{faction_file_id}/g, faction_file_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}