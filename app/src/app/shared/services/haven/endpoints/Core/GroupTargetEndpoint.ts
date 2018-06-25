import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class GroupTargetEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   changeRoleAsync(group_target_id:string, member_role:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'grouptargets/{group_target_id}/role/{member_role}';
      request.resource = request.resource.replace(/{group_target_id}/g, group_target_id.toString());
      request.resource = request.resource.replace(/{member_role}/g, member_role.toString());
      return this.api.execute(request);
   }
   upsertGroupTargetAsync(groupTarget:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'grouptargets/upsert';
      request.payload = JSON.stringify(groupTarget);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getGroupTargetAsync(group_target_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets/{group_target_id}';
      request.resource = request.resource.replace(/{group_target_id}/g, group_target_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, group_id:any = null, account_id:any = null, principal_id:any = null, term_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["group_id"] =  group_id;
      request.params["account_id"] =  account_id;
      request.params["principal_id"] =  principal_id;
      request.params["term_id"] =  term_id;
      return this.api.execute(request);
   }
   getGroupTargetByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupTargetByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupTargetByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupTargetByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grouptargets/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createGroupTargetAsync(grouptarget:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'grouptargets';
      request.payload = JSON.stringify(grouptarget);
      return this.api.execute(request);
   }
   updateGroupTargetAsync(group_target_id:string, grouptarget:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'grouptargets/{group_target_id}';
      request.resource = request.resource.replace(/{group_target_id}/g, group_target_id.toString());
      request.payload = JSON.stringify(grouptarget);
      return this.api.execute(request);
   }
   deleteGroupTargetAsync(group_target_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'grouptargets/{group_target_id}';
      request.resource = request.resource.replace(/{group_target_id}/g, group_target_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}