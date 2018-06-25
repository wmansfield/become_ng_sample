import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PrincipalInviteEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPrincipalInviteAsync(principal_invite_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalinvites/{principal_invite_id}';
      request.resource = request.resource.replace(/{principal_invite_id}/g, principal_invite_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, principal_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalinvites';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["principal_id"] =  principal_id;
      return this.api.execute(request);
   }
   getPrincipalInviteByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalinvites/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPrincipalInviteAsync(principalinvite:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principalinvites';
      request.payload = JSON.stringify(principalinvite);
      return this.api.execute(request);
   }
   updatePrincipalInviteAsync(principal_invite_id:string, principalinvite:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'principalinvites/{principal_invite_id}';
      request.resource = request.resource.replace(/{principal_invite_id}/g, principal_invite_id.toString());
      request.payload = JSON.stringify(principalinvite);
      return this.api.execute(request);
   }
   deletePrincipalInviteAsync(principal_invite_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'principalinvites/{principal_invite_id}';
      request.resource = request.resource.replace(/{principal_invite_id}/g, principal_invite_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}