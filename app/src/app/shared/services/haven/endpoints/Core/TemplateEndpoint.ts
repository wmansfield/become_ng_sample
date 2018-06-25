import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TemplateEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTemplateAsync(template_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'templates/{template_id}';
      request.resource = request.resource.replace(/{template_id}/g, template_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'templates';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   createTemplateAsync(template:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'templates';
      request.payload = JSON.stringify(template);
      return this.api.execute(request);
   }
   updateTemplateAsync(template_id:string, template:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'templates/{template_id}';
      request.resource = request.resource.replace(/{template_id}/g, template_id.toString());
      request.payload = JSON.stringify(template);
      return this.api.execute(request);
   }
   deleteTemplateAsync(template_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'templates/{template_id}';
      request.resource = request.resource.replace(/{template_id}/g, template_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}