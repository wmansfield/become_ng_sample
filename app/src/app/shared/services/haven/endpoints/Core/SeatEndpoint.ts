import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getDashboardAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/dashboard/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   removeSeatAsync(seat_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seats/{seat_id}/remove';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      return this.api.execute(request);
   }
   getSeatForPrincipalAsync(principal_id:string, include_removed:boolean) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/for_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   GenerateExportExcel(faction_id, term_id) {
      var path = "/seats/" + faction_id + "/" + term_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getSeatAsync(seat_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, term_id:any = null, principal_id:any = null, seat_type_id:any = null, removed:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["term_id"] =  term_id;
      request.params["principal_id"] =  principal_id;
      request.params["seat_type_id"] =  seat_type_id;
      request.params["removed"] =  removed;
      return this.api.execute(request);
   }
   getSeatByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, removed:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["removed"] =  removed;
      return this.api.execute(request);
   }
   getSeatByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, removed:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["removed"] =  removed;
      return this.api.execute(request);
   }
   getSeatByTypeAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, removed:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seats/by_type/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["removed"] =  removed;
      return this.api.execute(request);
   }
   createSeatAsync(seat:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seats';
      request.payload = JSON.stringify(seat);
      return this.api.execute(request);
   }
   updateSeatAsync(seat_id:string, seat:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seats/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      request.payload = JSON.stringify(seat);
      return this.api.execute(request);
   }
   deleteSeatAsync(seat_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seats/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}