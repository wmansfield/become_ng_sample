import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class StepMetaEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getStepMetaAsync(step_meta_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'stepmetas/{step_meta_id}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      return this.api.execute(request);
   }
   getStepMetaByStepAsync(step_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'stepmetas/by_step/{step_id}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createStepMetaAsync(stepmeta:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'stepmetas';
      request.payload = JSON.stringify(stepmeta);
      return this.api.execute(request);
   }
   updateStepMetaAsync(step_meta_id:string, stepmeta:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'stepmetas/{step_meta_id}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      request.payload = JSON.stringify(stepmeta);
      return this.api.execute(request);
   }
   updateStepMetaPriorityAsync(step_meta_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'stepmetas/{step_meta_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteStepMetaAsync(step_meta_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'stepmetas/{step_meta_id}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}