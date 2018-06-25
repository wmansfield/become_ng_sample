import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PlanEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   upsertPlanAsync(plan:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'plans/upsert';
      request.payload = JSON.stringify(plan);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getPlanAsync(plan_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'plans/{plan_id}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, visible:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'plans';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["visible"] =  visible;
      return this.api.execute(request);
   }
   getPlanByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, visible:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'plans/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["visible"] =  visible;
      return this.api.execute(request);
   }
   createPlanAsync(plan:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'plans';
      request.payload = JSON.stringify(plan);
      return this.api.execute(request);
   }
   updatePlanAsync(plan_id:string, plan:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'plans/{plan_id}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      request.payload = JSON.stringify(plan);
      return this.api.execute(request);
   }
   updatePlanPriorityAsync(plan_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'plans/{plan_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deletePlanAsync(plan_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'plans/{plan_id}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}