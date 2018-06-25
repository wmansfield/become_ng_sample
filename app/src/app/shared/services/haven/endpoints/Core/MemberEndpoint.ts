import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class MemberEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getMemberFromAccountAsync(faction_id:string, account_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/from_account/{faction_id}/{account_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      return this.api.execute(request);
   }
   findAsync(faction_id:string, term:any, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, only_enabled:boolean = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/find_by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["term"] =  term;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["only_enabled"] =  only_enabled;
      return this.api.execute(request);
   }
   changeStatusAsync(member_id:string, enabled:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'members/{member_id}/status/{enabled}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.resource = request.resource.replace(/{enabled}/g, enabled.toString());
      return this.api.execute(request);
   }
   changeTypeAsync(member_id:string, member_type:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'members/{member_id}/type/{member_type}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.resource = request.resource.replace(/{member_type}/g, member_type.toString());
      return this.api.execute(request);
   }
   GenerateExportExcel(faction_id) {
      var path = "/members/" + faction_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getMemberAsync(member_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, account_id:any = null, principal_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["account_id"] =  account_id;
      request.params["principal_id"] =  principal_id;
      return this.api.execute(request);
   }
   getMemberByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getMemberByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getMemberByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'members/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createMemberAsync(member:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'members';
      request.payload = JSON.stringify(member);
      return this.api.execute(request);
   }
   updateMemberAsync(member_id:string, member:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'members/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.payload = JSON.stringify(member);
      return this.api.execute(request);
   }
   deleteMemberAsync(member_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'members/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}