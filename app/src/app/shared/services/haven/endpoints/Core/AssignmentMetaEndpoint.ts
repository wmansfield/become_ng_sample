import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AssignmentMetaEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAssignmentMetaAsync(assignment_meta_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentmetas/{assignment_meta_id}';
      request.resource = request.resource.replace(/{assignment_meta_id}/g, assignment_meta_id.toString());
      return this.api.execute(request);
   }
   getAssignmentMetaByAssignmentAsync(assignment_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentmetas/by_assignment/{assignment_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentMetaByStepMetaAsync(step_meta_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentmetas/by_stepmeta/{step_meta_id}';
      request.resource = request.resource.replace(/{step_meta_id}/g, step_meta_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAssignmentMetaAsync(assignmentmeta:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignmentmetas';
      request.payload = JSON.stringify(assignmentmeta);
      return this.api.execute(request);
   }
   updateAssignmentMetaAsync(assignment_meta_id:string, assignmentmeta:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'assignmentmetas/{assignment_meta_id}';
      request.resource = request.resource.replace(/{assignment_meta_id}/g, assignment_meta_id.toString());
      request.payload = JSON.stringify(assignmentmeta);
      return this.api.execute(request);
   }
   deleteAssignmentMetaAsync(assignment_meta_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'assignmentmetas/{assignment_meta_id}';
      request.resource = request.resource.replace(/{assignment_meta_id}/g, assignment_meta_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}