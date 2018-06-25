import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AppLabelEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAppLabelAsync(app_label_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabels/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, demo_faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabels';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["demo_faction_id"] =  demo_faction_id;
      return this.api.execute(request);
   }
   getAppLabelByDemoFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'applabels/by_demofaction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAppLabelAsync(applabel:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'applabels';
      request.payload = JSON.stringify(applabel);
      return this.api.execute(request);
   }
   updateAppLabelAsync(app_label_id:string, applabel:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'applabels/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      request.payload = JSON.stringify(applabel);
      return this.api.execute(request);
   }
   deleteAppLabelAsync(app_label_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'applabels/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}