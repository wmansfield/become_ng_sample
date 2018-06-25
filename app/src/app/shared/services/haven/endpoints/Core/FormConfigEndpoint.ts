import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormConfigEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   upsertFormConfigAsync(formconfig:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formconfigs/upsert';
      request.payload = JSON.stringify(formconfig);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFormConfigAsync(form_config_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formconfigs/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, flow:any = null, purpose:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formconfigs';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["flow"] =  flow;
      request.params["purpose"] =  purpose;
      return this.api.execute(request);
   }
   getFormConfigByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null, purpose:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formconfigs/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      request.params["purpose"] =  purpose;
      return this.api.execute(request);
   }
   createFormConfigAsync(formconfig:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formconfigs';
      request.payload = JSON.stringify(formconfig);
      return this.api.execute(request);
   }
   updateFormConfigAsync(form_config_id:string, formconfig:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'formconfigs/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      request.payload = JSON.stringify(formconfig);
      return this.api.execute(request);
   }
   deleteFormConfigAsync(form_config_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'formconfigs/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}