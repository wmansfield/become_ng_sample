import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   syncDocumentsAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/sync_docs';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   syncSubscriptionsAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/sync_subscriptions';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   subscriptionSetLiveModeAsync(faction_id:string, live_mode:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/live_mode/{live_mode}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{live_mode}/g, live_mode.toString());
      return this.api.execute(request);
   }
   registerForPrincipalAsync(faction_id:string, registerInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/register_principal';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(registerInput);
      return this.api.execute(request);
   }
   addPhotoForFactionAvatar(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/photo';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   findHandle(faction_id:string, limit:number = 10, term:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/{faction_id}/handles';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["limit"] =  limit;
      request.params["term"] =  term;
      return this.api.execute(request);
   }
   handleAvailable(faction_id:string, term:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/{faction_id}/handle_available';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["term"] =  term;
      return this.api.execute(request);
   }
   getByCode(code:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_code';
      request.params["code"] =  code;
      return this.api.execute(request);
   }
   selfNotifications(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/{faction_id}/notifications';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   findAccountInFactionAsync(faction_id:string, term:any, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/find_by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["term"] =  term;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getUserStats(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/{faction_id}/user_stats';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   reedemCodeAsync(registerInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/redeem_code';
      request.payload = JSON.stringify(registerInput);
      return this.api.execute(request);
   }
   searchContent(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions/search_content/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFactionAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, naming_id:any = null, app_server_id:any = null, app_label_id:any = null, asset_id_logo:any = null, asset_id_header:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["naming_id"] =  naming_id;
      request.params["app_server_id"] =  app_server_id;
      request.params["app_label_id"] =  app_label_id;
      request.params["asset_id_logo"] =  asset_id_logo;
      request.params["asset_id_header"] =  asset_id_header;
      return this.api.execute(request);
   }
   getFactionByNamingAsync(naming_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_naming/{naming_id}';
      request.resource = request.resource.replace(/{naming_id}/g, naming_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFactionByAppServerAsync(app_server_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_appserver/{app_server_id}';
      request.resource = request.resource.replace(/{app_server_id}/g, app_server_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFactionByAppLabelAsync(app_label_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_applabel/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFactionByLogoAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_logo/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFactionByHeaderAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factions/by_header/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFactionAsync(faction:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factions';
      request.payload = JSON.stringify(faction);
      return this.api.execute(request);
   }
   updateFactionAsync(faction_id:string, faction:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factions/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(faction);
      return this.api.execute(request);
   }
   deleteFactionAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factions/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}