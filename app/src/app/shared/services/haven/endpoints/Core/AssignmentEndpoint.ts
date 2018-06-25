import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AssignmentEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getAssignmentByProgramManagerAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignments/by_program_manager/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentForFactionAccount(faction_id:string, pending:boolean, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignments/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["pending"] =  pending;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   assignmentRespondAsync(assignment_id:string, principal_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignments/{assignment_id}/respond/{principal_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   assignmentMoveAsync(assignment_id:string, principal_id:string, days:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignments/{assignment_id}/move/{principal_id}/{days}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.resource = request.resource.replace(/{days}/g, days.toString());
      return this.api.execute(request);
   }
   markDownloadedAsync(assignment_response_id:string, calendar_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignments/downloaded/{assignment_response_id}/{calendar_id}';
      request.resource = request.resource.replace(/{assignment_response_id}/g, assignment_response_id.toString());
      request.resource = request.resource.replace(/{calendar_id}/g, calendar_id.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getAssignmentAsync(assignment_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignments/{assignment_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      return this.api.execute(request);
   }
   getAssignmentByProgramAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignments/by_program/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAssignmentByProcedureAsync(procedure_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'assignments/by_procedure/{procedure_id}';
      request.resource = request.resource.replace(/{procedure_id}/g, procedure_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAssignmentAsync(assignment:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'assignments';
      request.payload = JSON.stringify(assignment);
      return this.api.execute(request);
   }
   updateAssignmentAsync(assignment_id:string, assignment:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'assignments/{assignment_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      request.payload = JSON.stringify(assignment);
      return this.api.execute(request);
   }
   deleteAssignmentAsync(assignment_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'assignments/{assignment_id}';
      request.resource = request.resource.replace(/{assignment_id}/g, assignment_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}