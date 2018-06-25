import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AssignmentResponseDataEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAssignmentResponseDataAsync(assignment_data_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponsedatas/{assignment_data_id}';
      request.resource = request.resource.replace(/{assignment_data_id}/g, assignment_data_id.toString());
      return this.api.execute(request);
   }
   getAssignmentResponseDataByAssignmentResponseAsync(assignment_response_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponsedatas/by_assignmentresponse/{assignment_response_id}';
      request.resource = request.resource.replace(/{assignment_response_id}/g, assignment_response_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentResponseDataByStepAsync(step_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponsedatas/by_step/{step_id}';
      request.resource = request.resource.replace(/{step_id}/g, step_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentResponseDataByStepMetaAsync(step_meta_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponsedatas/by_stepmeta/{step_meta_id}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentResponseDataByAssetAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponsedatas/by_asset/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAssignmentResponseDataAsync(assignmentresponsedata:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignmentresponsedatas';
      request.payload = JSON.stringify(assignmentresponsedata);
      return this.api.execute(request);
   }
   updateAssignmentResponseDataAsync(assignment_data_id:string, assignmentresponsedata:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'assignmentresponsedatas/{assignment_data_id}';
      request.resource = request.resource.replace(/{assignment_data_id}/g, assignment_data_id.toString());
      request.payload = JSON.stringify(assignmentresponsedata);
      return this.api.execute(request);
   }
   deleteAssignmentResponseDataAsync(assignment_data_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'assignmentresponsedatas/{assignment_data_id}';
      request.resource = request.resource.replace(/{assignment_data_id}/g, assignment_data_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}