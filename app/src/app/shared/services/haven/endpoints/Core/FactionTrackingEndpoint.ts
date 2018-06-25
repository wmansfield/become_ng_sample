import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionTrackingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFactionTrackingAsync(faction_tracking_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontrackings/{faction_tracking_id}';
      request.resource = request.resource.replace(/{faction_tracking_id}/g, faction_tracking_id.toString());
      return this.api.execute(request);
   }
   getFactionTrackingByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontrackings/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFactionTrackingAsync(factiontracking:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factiontrackings';
      request.payload = JSON.stringify(factiontracking);
      return this.api.execute(request);
   }
   updateFactionTrackingAsync(faction_tracking_id:string, factiontracking:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factiontrackings/{faction_tracking_id}';
      request.resource = request.resource.replace(/{faction_tracking_id}/g, faction_tracking_id.toString());
      request.payload = JSON.stringify(factiontracking);
      return this.api.execute(request);
   }
   deleteFactionTrackingAsync(faction_tracking_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factiontrackings/{faction_tracking_id}';
      request.resource = request.resource.replace(/{faction_tracking_id}/g, faction_tracking_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}