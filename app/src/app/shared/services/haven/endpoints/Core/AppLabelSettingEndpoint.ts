import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AppLabelSettingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAppLabelSettingAsync(app_label_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabelsettings/{app_label_setting_id}';
      request.resource = request.resource.replace(/{app_label_setting_id}/g, app_label_setting_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, app_label_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabelsettings';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["app_label_id"] =  app_label_id;
      return this.api.execute(request);
   }
   getAppLabelSettingByAppLabelAsync(app_label_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabelsettings/by_applabel/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAppLabelSettingAsync(applabelsetting:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'applabelsettings';
      request.payload = JSON.stringify(applabelsetting);
      return this.api.execute(request);
   }
   updateAppLabelSettingAsync(app_label_setting_id:string, applabelsetting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'applabelsettings/{app_label_setting_id}';
      request.resource = request.resource.replace(/{app_label_setting_id}/g, app_label_setting_id.toString());
      request.payload = JSON.stringify(applabelsetting);
      return this.api.execute(request);
   }
   deleteAppLabelSettingAsync(app_label_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'applabelsettings/{app_label_setting_id}';
      request.resource = request.resource.replace(/{app_label_setting_id}/g, app_label_setting_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}