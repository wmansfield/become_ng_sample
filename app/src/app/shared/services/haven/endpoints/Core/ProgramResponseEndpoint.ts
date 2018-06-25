import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProgramResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProgramResponseAsync(program_id:string, program_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programresponses/{program_id}/{program_response_id}';
      request.resource = request.resource.replace(/{program_response_id}/g, program_response_id.toString());
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   getProgramResponseByProgramAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programresponses/by_program/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramResponseByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programresponses/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProgramResponseAsync(programresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programresponses';
      request.payload = JSON.stringify(programresponse);
      return this.api.execute(request);
   }
   updateProgramResponseAsync(program_response_id:string, programresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programresponses/{program_response_id}';
      request.resource = request.resource.replace(/{program_response_id}/g, program_response_id.toString());
      request.payload = JSON.stringify(programresponse);
      return this.api.execute(request);
   }
   deleteProgramResponseAsync(program_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'programresponses/{program_response_id}';
      request.resource = request.resource.replace(/{program_response_id}/g, program_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}