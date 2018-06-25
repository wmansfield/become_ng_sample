import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AssignmentResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAssignmentResponseAsync(assignment_id:string, assignment_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponses/{assignment_id}/{assignment_response_id}';
      request.resource = request.resource.replace(/{assignment_response_id}/g, assignment_response_id.toString());
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      return this.api.execute(request);
   }
   getAssignmentResponseByAssignmentAsync(assignment_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponses/by_assignment/{assignment_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentResponseByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignmentresponses/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAssignmentResponseAsync(assignmentresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignmentresponses';
      request.payload = JSON.stringify(assignmentresponse);
      return this.api.execute(request);
   }
   updateAssignmentResponseAsync(assignment_response_id:string, assignmentresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'assignmentresponses/{assignment_response_id}';
      request.resource = request.resource.replace(/{assignment_response_id}/g, assignment_response_id.toString());
      request.payload = JSON.stringify(assignmentresponse);
      return this.api.execute(request);
   }
   deleteAssignmentResponseAsync(assignment_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'assignmentresponses/{assignment_response_id}';
      request.resource = request.resource.replace(/{assignment_response_id}/g, assignment_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}