import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class GlobalSettingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getGlobalSettingAsync(global_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'globalsettings/{global_setting_id}';
      request.resource = request.resource.replace(/{global_setting_id}/g, global_setting_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'globalsettings';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   createGlobalSettingAsync(globalsetting:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'globalsettings';
      request.payload = JSON.stringify(globalsetting);
      return this.api.execute(request);
   }
   updateGlobalSettingAsync(global_setting_id:string, globalsetting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'globalsettings/{global_setting_id}';
      request.resource = request.resource.replace(/{global_setting_id}/g, global_setting_id.toString());
      request.payload = JSON.stringify(globalsetting);
      return this.api.execute(request);
   }
   deleteGlobalSettingAsync(global_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'globalsettings/{global_setting_id}';
      request.resource = request.resource.replace(/{global_setting_id}/g, global_setting_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}