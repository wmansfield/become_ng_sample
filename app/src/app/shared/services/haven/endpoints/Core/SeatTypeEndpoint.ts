import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatTypeEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getSeatTypeAsync(seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seattypes/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      return this.api.execute(request);
   }
   getSeatTypeByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seattypes/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getSeatTypeByTargetTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seattypes/by_targetterm/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createSeatTypeAsync(seattype:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seattypes';
      request.payload = JSON.stringify(seattype);
      return this.api.execute(request);
   }
   updateSeatTypeAsync(seat_type_id:string, seattype:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seattypes/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.payload = JSON.stringify(seattype);
      return this.api.execute(request);
   }
   deleteSeatTypeAsync(seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seattypes/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}