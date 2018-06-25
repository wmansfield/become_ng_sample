import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProgramRemarkReplyEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProgramRemarkReplyAsync(program_id_ref:string, program_remark_id:string, program_remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarkreplys/{program_id_ref}/{program_remark_id}/{program_remark_reply_id}';
      request.resource = request.resource.replace(/{program_remark_reply_id}/g, program_remark_reply_id.toString());
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.resource = request.resource.replace(/{program_id_ref}/g, program_id_ref.toString());
      return this.api.execute(request);
   }
   getProgramRemarkReplyByProgramRemarkAsync(program_remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarkreplys/by_programremark/{program_remark_id}';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProgramRemarkReplyByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programremarkreplys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProgramRemarkReplyAsync(programremarkreply:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programremarkreplys';
      request.payload = JSON.stringify(programremarkreply);
      return this.api.execute(request);
   }
   updateProgramRemarkReplyAsync(program_remark_reply_id:string, programremarkreply:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programremarkreplys/{program_remark_reply_id}';
      request.resource = request.resource.replace(/{program_remark_reply_id}/g, program_remark_reply_id.toString());
      request.payload = JSON.stringify(programremarkreply);
      return this.api.execute(request);
   }
   deleteProgramRemarkReplyAsync(program_remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'programremarkreplys/{program_remark_reply_id}';
      request.resource = request.resource.replace(/{program_remark_reply_id}/g, program_remark_reply_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}