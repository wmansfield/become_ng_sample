import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class StepEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getStepAsync(step_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'steps/{step_id}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      return this.api.execute(request);
   }
   getStepByProcedureAsync(procedure_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'steps/by_procedure/{procedure_id}';
      request.resource = request.resource.replace(/{procedure_id}/g, procedure_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createStepAsync(step:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'steps';
      request.payload = JSON.stringify(step);
      return this.api.execute(request);
   }
   updateStepAsync(step_id:string, step:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'steps/{step_id}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      request.payload = JSON.stringify(step);
      return this.api.execute(request);
   }
   updateStepPriorityAsync(step_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'steps/{step_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteStepAsync(step_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'steps/{step_id}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}