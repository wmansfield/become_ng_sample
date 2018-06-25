import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TermEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   findByFactionAsync(faction_id:string, keyword:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms/by_faction/{faction_id}/find';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   getActiveTermByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms/by_faction_active/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getTermAsync(term_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, seat_type_id_target:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["seat_type_id_target"] =  seat_type_id_target;
      return this.api.execute(request);
   }
   getTermByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getTermBySeatTypeTargetAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'terms/by_seattypetarget/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTermAsync(term:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'terms';
      request.payload = JSON.stringify(term);
      return this.api.execute(request);
   }
   updateTermAsync(term_id:string, term:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'terms/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.payload = JSON.stringify(term);
      return this.api.execute(request);
   }
   deleteTermAsync(term_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'terms/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}