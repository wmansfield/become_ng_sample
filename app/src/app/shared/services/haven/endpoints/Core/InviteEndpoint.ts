import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class InviteEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getInviteAsync(invite_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'invites/{invite_id}';
      request.resource = request.resource.replace(/{invite_id}/g, invite_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'invites';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getInviteByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'invites/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createInviteAsync(invite:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'invites';
      request.payload = JSON.stringify(invite);
      return this.api.execute(request);
   }
   updateInviteAsync(invite_id:string, invite:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'invites/{invite_id}';
      request.resource = request.resource.replace(/{invite_id}/g, invite_id.toString());
      request.payload = JSON.stringify(invite);
      return this.api.execute(request);
   }
   deleteInviteAsync(invite_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'invites/{invite_id}';
      request.resource = request.resource.replace(/{invite_id}/g, invite_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}