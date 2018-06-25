import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getOccasionResponseAsync(occasion_id:string, occasion_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses/{occasion_id}/{occasion_response_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, occasion_id:any = null, account_id:any = null, form_id:any = null, occasion_response_id_merged:any = null, response:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["occasion_id"] =  occasion_id;
      request.params["account_id"] =  account_id;
      request.params["form_id"] =  form_id;
      request.params["occasion_response_id_merged"] =  occasion_response_id_merged;
      request.params["response"] =  response;
      return this.api.execute(request);
   }
   getOccasionResponseByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, response:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["response"] =  response;
      return this.api.execute(request);
   }
   getOccasionResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, response:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["response"] =  response;
      return this.api.execute(request);
   }
   getOccasionResponseByFormAsync(form_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, response:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses/by_form/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["response"] =  response;
      return this.api.execute(request);
   }
   getOccasionResponseByMergedResponseAsync(occasion_response_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, response:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionresponses/by_mergedresponse/{occasion_response_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["response"] =  response;
      return this.api.execute(request);
   }
   createOccasionResponseAsync(occasionresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionresponses';
      request.payload = JSON.stringify(occasionresponse);
      return this.api.execute(request);
   }
   updateOccasionResponseAsync(occasion_response_id:string, occasionresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasionresponses/{occasion_response_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      request.payload = JSON.stringify(occasionresponse);
      return this.api.execute(request);
   }
   deleteOccasionResponseAsync(occasion_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasionresponses/{occasion_response_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}