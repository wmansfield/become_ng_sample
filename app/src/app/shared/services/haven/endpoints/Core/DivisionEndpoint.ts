import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class DivisionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getDivisionAsync(division_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'divisions/{division_id}';
      request.resource = request.resource.replace(/{division_id}/g, division_id.toString());
      return this.api.execute(request);
   }
   getDivisionByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'divisions/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createDivisionAsync(division:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'divisions';
      request.payload = JSON.stringify(division);
      return this.api.execute(request);
   }
   updateDivisionAsync(division_id:string, division:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'divisions/{division_id}';
      request.resource = request.resource.replace(/{division_id}/g, division_id.toString());
      request.payload = JSON.stringify(division);
      return this.api.execute(request);
   }
   deleteDivisionAsync(division_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'divisions/{division_id}';
      request.resource = request.resource.replace(/{division_id}/g, division_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}