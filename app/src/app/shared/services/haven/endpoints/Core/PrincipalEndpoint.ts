import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PrincipalEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   importPrincipalsAsync(input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/import';
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   registerPrincipalAsync(input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/add';
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   addPhotoForPrincipalAvatar(faction_id:string, principal_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/{principal_id}/photo/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   findPrincipalByFactionAsync(faction_id:string, filter:any = "", skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/find_by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["filter"] =  filter;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   changeStatusAsync(principal_id:string, enabled:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/{principal_id}/status/{enabled}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.resource = request.resource.replace(/{enabled}/g, enabled.toString());
      return this.api.execute(request);
   }
   removeAsync(principal_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/{principal_id}/status/remove';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   reSyncSubscriptionAsync(principal_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/{principal_id}/resync';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   getDataSelfAsync(faction_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/{faction_id}/get_data_self/{principal_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   getDataManagerAsync(faction_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/{faction_id}/get_data/{principal_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   updateData(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals/{faction_id}/update_data';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   GenerateExportExcel(faction_id) {
      var path = "/principals/" + faction_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getPrincipalAsync(principal_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, asset_id_avatar:any = null, enabled:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["asset_id_avatar"] =  asset_id_avatar;
      request.params["enabled"] =  enabled;
      return this.api.execute(request);
   }
   getPrincipalByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, enabled:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["enabled"] =  enabled;
      return this.api.execute(request);
   }
   getPrincipalByAvatarAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, enabled:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principals/by_avatar/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["enabled"] =  enabled;
      return this.api.execute(request);
   }
   createPrincipalAsync(principal:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principals';
      request.payload = JSON.stringify(principal);
      return this.api.execute(request);
   }
   updatePrincipalAsync(principal_id:string, principal:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'principals/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.payload = JSON.stringify(principal);
      return this.api.execute(request);
   }
   deletePrincipalAsync(principal_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'principals/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}