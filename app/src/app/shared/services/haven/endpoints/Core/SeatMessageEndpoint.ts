import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatMessageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getSeatMessageAsync(seat_message_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatmessages/{seat_message_id}';
      request.resource = request.resource.replace(/{seat_message_id}/g, seat_message_id.toString());
      return this.api.execute(request);
   }
   getSeatMessageBySeatAsync(seat_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatmessages/by_seat/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getSeatMessageByTypeAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatmessages/by_type/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createSeatMessageAsync(seatmessage:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seatmessages';
      request.payload = JSON.stringify(seatmessage);
      return this.api.execute(request);
   }
   updateSeatMessageAsync(seat_message_id:string, seatmessage:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seatmessages/{seat_message_id}';
      request.resource = request.resource.replace(/{seat_message_id}/g, seat_message_id.toString());
      request.payload = JSON.stringify(seatmessage);
      return this.api.execute(request);
   }
   deleteSeatMessageAsync(seat_message_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seatmessages/{seat_message_id}';
      request.resource = request.resource.replace(/{seat_message_id}/g, seat_message_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}