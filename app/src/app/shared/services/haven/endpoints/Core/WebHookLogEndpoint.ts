import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class WebHookLogEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getWebHookLogAsync(web_hook_log_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'webhooklogs/{web_hook_log_id}';
      request.resource = request.resource.replace(/{web_hook_log_id}/g, web_hook_log_id.toString());
      return this.api.execute(request);
   }
   createWebHookLogAsync(webhooklog:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'webhooklogs';
      request.payload = JSON.stringify(webhooklog);
      return this.api.execute(request);
   }
   updateWebHookLogAsync(web_hook_log_id:string, webhooklog:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'webhooklogs/{web_hook_log_id}';
      request.resource = request.resource.replace(/{web_hook_log_id}/g, web_hook_log_id.toString());
      request.payload = JSON.stringify(webhooklog);
      return this.api.execute(request);
   }
   deleteWebHookLogAsync(web_hook_log_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'webhooklogs/{web_hook_log_id}';
      request.resource = request.resource.replace(/{web_hook_log_id}/g, web_hook_log_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}