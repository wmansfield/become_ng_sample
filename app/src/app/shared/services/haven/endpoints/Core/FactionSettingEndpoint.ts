import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionSettingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getForDocumentsAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionsettings/for_documents/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getForDashboardAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionsettings/for_dashboard/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   updateFactionSettingBatchAsync(faction_id:string, batch:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionsettings/update_batch/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(batch);
      return this.api.execute(request);
   }
   updateDashboardAsync(faction_id:string, setting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionsettings/update_dashboard/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(setting);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFactionSettingAsync(faction_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionsettings/{faction_setting_id}';
      request.resource = request.resource.replace(/{faction_setting_id}/g, faction_setting_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionsettings';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getFactionSettingByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionsettings/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFactionSettingAsync(factionsetting:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factionsettings';
      request.payload = JSON.stringify(factionsetting);
      return this.api.execute(request);
   }
   updateFactionSettingAsync(faction_setting_id:string, factionsetting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionsettings/{faction_setting_id}';
      request.resource = request.resource.replace(/{faction_setting_id}/g, faction_setting_id.toString());
      request.payload = JSON.stringify(factionsetting);
      return this.api.execute(request);
   }
   deleteFactionSettingAsync(faction_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factionsettings/{faction_setting_id}';
      request.resource = request.resource.replace(/{faction_setting_id}/g, faction_setting_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}