import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProfileFieldDataEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProfileFieldDataAsync(profile_id:string, profile_field_data_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefielddatas/{profile_id}/{profile_field_data_id}';
      request.resource = request.resource.replace(/{profile_field_data_id}/g, profile_field_data_id.toString());
      request.resource = request.resource.replace(/{profile_id}/g, profile_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, profile_field_id:any = null, profile_id:any = null, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefielddatas';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["profile_field_id"] =  profile_field_id;
      request.params["profile_id"] =  profile_id;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   getProfileFieldDataByProfileFieldAsync(profile_field_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefielddatas/by_profilefield/{profile_field_id}';
      request.resource = request.resource.replace(/{profile_field_id}/g, profile_field_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   getProfileFieldDataByProfileAsync(profile_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'profilefielddatas/by_profile/{profile_id}';
      request.resource = request.resource.replace(/{profile_id}/g, profile_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   createProfileFieldDataAsync(profilefielddata:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'profilefielddatas';
      request.payload = JSON.stringify(profilefielddata);
      return this.api.execute(request);
   }
   updateProfileFieldDataAsync(profile_field_data_id:string, profilefielddata:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'profilefielddatas/{profile_field_data_id}';
      request.resource = request.resource.replace(/{profile_field_data_id}/g, profile_field_data_id.toString());
      request.payload = JSON.stringify(profilefielddata);
      return this.api.execute(request);
   }
   deleteProfileFieldDataAsync(profile_field_data_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'profilefielddatas/{profile_field_data_id}';
      request.resource = request.resource.replace(/{profile_field_data_id}/g, profile_field_data_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}