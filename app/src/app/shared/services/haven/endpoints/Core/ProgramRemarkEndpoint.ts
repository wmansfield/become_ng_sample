import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProgramRemarkEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getProgramRemarksAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/for_program/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramRemarksUntilAsync(program_id:string, program_remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/for_specific/{program_id}/{program_remark_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   dismissRemark(program_remark_id:string, dismiss:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programremarks/{program_remark_id}/{dismiss}';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.resource = request.resource.replace(/{dismiss}/g, dismiss.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getProgramRemarkAsync(program_id:string, program_remark_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/{program_id}/{program_remark_id}';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   getProgramRemarkByProgramAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/by_program/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramRemarkByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramRemarkByDiscussionAsync(program_discussion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarks/by_discussion/{program_discussion_id}';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProgramRemarkAsync(programremark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programremarks';
      request.payload = JSON.stringify(programremark);
      return this.api.execute(request);
   }
   updateProgramRemarkAsync(program_remark_id:string, programremark:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programremarks/{program_remark_id}';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.payload = JSON.stringify(programremark);
      return this.api.execute(request);
   }
   deleteProgramRemarkAsync(program_remark_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'programremarks/{program_remark_id}';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}