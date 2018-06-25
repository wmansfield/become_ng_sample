import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProfileFieldEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProfileFieldAsync(profile_field_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefields/{profile_field_id}';
      request.resource = request.resource.replace(/{profile_field_id}/g, profile_field_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, staff_only:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefields';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["staff_only"] =  staff_only;
      return this.api.execute(request);
   }
   getProfileFieldByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff_only:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefields/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff_only"] =  staff_only;
      return this.api.execute(request);
   }
   createProfileFieldAsync(profilefield:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profilefields';
      request.payload = JSON.stringify(profilefield);
      return this.api.execute(request);
   }
   updateProfileFieldAsync(profile_field_id:string, profilefield:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'profilefields/{profile_field_id}';
      request.resource = request.resource.replace(/{profile_field_id}/g, profile_field_id.toString());
      request.payload = JSON.stringify(profilefield);
      return this.api.execute(request);
   }
   updateProfileFieldPriorityAsync(profile_field_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profilefields/{profile_field_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{profile_field_id}/g, profile_field_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteProfileFieldAsync(profile_field_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'profilefields/{profile_field_id}';
      request.resource = request.resource.replace(/{profile_field_id}/g, profile_field_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}