import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class GroupEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getPublicForFaction(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groups/for_faction/{faction_id}/public';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getActivity(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'groups/activity/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   GenerateExportExcel(group_id) {
      var path = "/groupmembers/" + group_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getGroupAsync(group_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groups/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groups';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getGroupByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'groups/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createGroupAsync(group:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'groups';
      request.payload = JSON.stringify(group);
      return this.api.execute(request);
   }
   updateGroupAsync(group_id:string, group:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'groups/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.payload = JSON.stringify(group);
      return this.api.execute(request);
   }
   deleteGroupAsync(group_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'groups/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}