import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class GroupMemberEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   ensureGroupMemberAsync(groupmember:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'groupmembers/ensure';
      request.payload = JSON.stringify(groupmember);
      return this.api.execute(request);
   }
   leaveGroupAsync(group_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'groupmembers/leave/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      return this.api.execute(request);
   }
   getForFactionAccount(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupMemberForAccountAsync(group_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/for_account/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getGroupMemberAsync(group_member_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/{group_member_id}';
      request.resource = request.resource.replace(/{group_member_id}/g, group_member_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, group_id:any = null, group_target_id:any = null, account_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["group_id"] =  group_id;
      request.params["group_target_id"] =  group_target_id;
      request.params["account_id"] =  account_id;
      return this.api.execute(request);
   }
   getGroupMemberByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupMemberByGroupTargetAsync(group_target_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/by_grouptarget/{group_target_id}';
      request.resource = request.resource.replace(/{group_target_id}/g, group_target_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGroupMemberByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groupmembers/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createGroupMemberAsync(groupmember:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'groupmembers';
      request.payload = JSON.stringify(groupmember);
      return this.api.execute(request);
   }
   updateGroupMemberAsync(group_member_id:string, groupmember:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'groupmembers/{group_member_id}';
      request.resource = request.resource.replace(/{group_member_id}/g, group_member_id.toString());
      request.payload = JSON.stringify(groupmember);
      return this.api.execute(request);
   }
   deleteGroupMemberAsync(group_member_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'groupmembers/{group_member_id}';
      request.resource = request.resource.replace(/{group_member_id}/g, group_member_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}