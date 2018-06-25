import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProgramEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getProgramManagerAsync(program_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/{program_id}/manager';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   getProgramsForFactionAccount(faction_id:string, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   copyProgramAsync(program_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programs/{program_id}/copy';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   addPhotoForProgramAsync(faction_id:string, input:any, program_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programs/photo/{faction_id}/{program_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   addVideoForProgramAsync(faction_id:string, input:any, program_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programs/video/{faction_id}/{program_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   findProgramManagerAsync(faction_id:string, draft:boolean, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_faction/{faction_id}/manager';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["keyword"] =  keyword;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   updateExecutionInfoAsync(program_id:string, program:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programs/{program_id}/executioninfo';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.payload = JSON.stringify(program);
      return this.api.execute(request);
   }
   acceptProgramAsync(program_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programs/{program_id}/accept/{principal_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   updateProgramRemarkTextAsync(program_remark_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programremarks/{program_remark_id}/update_body';
      request.resource = request.resource.replace(/{program_remark_id}/g, program_remark_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   updateProgramRemarkReplyTextAsync(program_remark_reply_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programremarkreplys/{program_remark_reply_id}/update_body';
      request.resource = request.resource.replace(/{program_remark_reply_id}/g, program_remark_reply_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   downloadExcel(program_id:string, download:boolean) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/{program_id}/export_excel';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["download"] =  download;
      return this.api.execute(request);
   }
   downloadPdf(program_id:string, download:boolean) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/{program_id}/export_pdf';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["download"] =  download;
      return this.api.execute(request);
   }
   GenerateExportExcel(program_id) {
      var path = "/programs/" + program_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   GenerateExportPdf(program_id) {
      var path = "/programs/" + program_id + "/export_pdf";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getProgramAsync(program_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, account_id_creator:any = null, principal_id:any = null, account_id:any = null, member_id:any = null, group_id:any = null, group_id_ignore:any = null, term_id:any = null, program_discussion_id:any = null, thread_id:any = null, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["account_id_creator"] =  account_id_creator;
      request.params["principal_id"] =  principal_id;
      request.params["account_id"] =  account_id;
      request.params["member_id"] =  member_id;
      request.params["group_id"] =  group_id;
      request.params["group_id_ignore"] =  group_id_ignore;
      request.params["term_id"] =  term_id;
      request.params["program_discussion_id"] =  program_discussion_id;
      request.params["thread_id"] =  thread_id;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByAccountCreatorAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_accountcreator/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByDiscussionAsync(program_discussion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_discussion/{program_discussion_id}';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getProgramByThreadAsync(thread_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programs/by_thread/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   createProgramAsync(program:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programs';
      request.payload = JSON.stringify(program);
      return this.api.execute(request);
   }
   updateProgramAsync(program_id:string, program:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programs/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.payload = JSON.stringify(program);
      return this.api.execute(request);
   }
   deleteProgramAsync(program_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'programs/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}