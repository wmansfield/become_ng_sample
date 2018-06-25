import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PlanSeatTypeEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPlanSeatTypeAsync(plan_seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'planseattypes/{plan_seat_type_id}';
      request.resource = request.resource.replace(/{plan_seat_type_id}/g, plan_seat_type_id.toString());
      return this.api.execute(request);
   }
   getPlanSeatTypeByPlanAsync(plan_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'planseattypes/by_plan/{plan_id}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPlanSeatTypeBySeatTypeAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'planseattypes/by_seattype/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPlanSeatTypeAsync(planseattype:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'planseattypes';
      request.payload = JSON.stringify(planseattype);
      return this.api.execute(request);
   }
   updatePlanSeatTypeAsync(plan_seat_type_id:string, planseattype:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'planseattypes/{plan_seat_type_id}';
      request.resource = request.resource.replace(/{plan_seat_type_id}/g, plan_seat_type_id.toString());
      request.payload = JSON.stringify(planseattype);
      return this.api.execute(request);
   }
   deletePlanSeatTypeAsync(plan_seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'planseattypes/{plan_seat_type_id}';
      request.resource = request.resource.replace(/{plan_seat_type_id}/g, plan_seat_type_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}