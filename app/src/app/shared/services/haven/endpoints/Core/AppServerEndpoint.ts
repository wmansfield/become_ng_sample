import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AppServerEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAppServerAsync(app_server_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'appservers/{app_server_id}';
      request.resource = request.resource.replace(/{app_server_id}/g, app_server_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'appservers';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   createAppServerAsync(appserver:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'appservers';
      request.payload = JSON.stringify(appserver);
      return this.api.execute(request);
   }
   updateAppServerAsync(app_server_id:string, appserver:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'appservers/{app_server_id}';
      request.resource = request.resource.replace(/{app_server_id}/g, app_server_id.toString());
      request.payload = JSON.stringify(appserver);
      return this.api.execute(request);
   }
   deleteAppServerAsync(app_server_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'appservers/{app_server_id}';
      request.resource = request.resource.replace(/{app_server_id}/g, app_server_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}