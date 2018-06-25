import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PrincipalFieldEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPrincipalFieldAsync(principal_field_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfields/{principal_field_id}';
      request.resource = request.resource.replace(/{principal_field_id}/g, principal_field_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, staff_only:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfields';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["staff_only"] =  staff_only;
      return this.api.execute(request);
   }
   getPrincipalFieldByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff_only:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfields/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff_only"] =  staff_only;
      return this.api.execute(request);
   }
   createPrincipalFieldAsync(principalfield:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principalfields';
      request.payload = JSON.stringify(principalfield);
      return this.api.execute(request);
   }
   updatePrincipalFieldAsync(principal_field_id:string, principalfield:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'principalfields/{principal_field_id}';
      request.resource = request.resource.replace(/{principal_field_id}/g, principal_field_id.toString());
      request.payload = JSON.stringify(principalfield);
      return this.api.execute(request);
   }
   updatePrincipalFieldPriorityAsync(principal_field_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principalfields/{principal_field_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{principal_field_id}/g, principal_field_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deletePrincipalFieldAsync(principal_field_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'principalfields/{principal_field_id}';
      request.resource = request.resource.replace(/{principal_field_id}/g, principal_field_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}