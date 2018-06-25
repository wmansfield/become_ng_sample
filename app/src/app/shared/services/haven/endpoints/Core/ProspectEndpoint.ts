import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProspectEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProspectAsync(prospect_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'prospects/{prospect_id}';
      request.resource = request.resource.replace(/{prospect_id}/g, prospect_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'prospects';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getProspectByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'prospects/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProspectAsync(prospect:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'prospects';
      request.payload = JSON.stringify(prospect);
      return this.api.execute(request);
   }
   updateProspectAsync(prospect_id:string, prospect:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'prospects/{prospect_id}';
      request.resource = request.resource.replace(/{prospect_id}/g, prospect_id.toString());
      request.payload = JSON.stringify(prospect);
      return this.api.execute(request);
   }
   deleteProspectAsync(prospect_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'prospects/{prospect_id}';
      request.resource = request.resource.replace(/{prospect_id}/g, prospect_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}