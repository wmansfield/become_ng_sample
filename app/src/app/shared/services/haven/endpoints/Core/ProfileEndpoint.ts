import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProfileEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   ensureForMemberAsync(member_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profiles/{member_id}/ensure_for_member';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      return this.api.execute(request);
   }
   ensureForFactionAccountAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profiles/{faction_id}/ensure_for_faction';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getDataSelfAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profiles/{faction_id}/get_data_self';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getDataManagerAsync(faction_id:string, account_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profiles/{faction_id}/get_data/{account_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      return this.api.execute(request);
   }
   updateData(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profiles/{faction_id}/update_data';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getProfileAsync(profile_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profiles/{profile_id}';
      request.resource = request.resource.replace(/{profile_id}/g, profile_id.toString());
      return this.api.execute(request);
   }
   getProfileByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profiles/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProfileByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profiles/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProfileAsync(profile:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profiles';
      request.payload = JSON.stringify(profile);
      return this.api.execute(request);
   }
   updateProfileAsync(profile_id:string, profile:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'profiles/{profile_id}';
      request.resource = request.resource.replace(/{profile_id}/g, profile_id.toString());
      request.payload = JSON.stringify(profile);
      return this.api.execute(request);
   }
   deleteProfileAsync(profile_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'profiles/{profile_id}';
      request.resource = request.resource.replace(/{profile_id}/g, profile_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}