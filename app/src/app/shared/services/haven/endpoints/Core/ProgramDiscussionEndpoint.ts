import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProgramDiscussionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getProgramRemarksAsync(program_discussion_id:string, open:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, mine:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programdiscussions/{program_discussion_id}/remarks/all';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      request.params["open"] =  open;
      request.params["mine"] =  mine;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getForAccountAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programdiscussions/for_account/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getProgramDiscussionAsync(program_discussion_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programdiscussions/{program_discussion_id}';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programdiscussions';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getProgramDiscussionByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'programdiscussions/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProgramDiscussionAsync(programdiscussion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'programdiscussions';
      request.payload = JSON.stringify(programdiscussion);
      return this.api.execute(request);
   }
   updateProgramDiscussionAsync(program_discussion_id:string, programdiscussion:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'programdiscussions/{program_discussion_id}';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      request.payload = JSON.stringify(programdiscussion);
      return this.api.execute(request);
   }
   deleteProgramDiscussionAsync(program_discussion_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'programdiscussions/{program_discussion_id}';
      request.resource = request.resource.replace(/{program_discussion_id}/g, program_discussion_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}