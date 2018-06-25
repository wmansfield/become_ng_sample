import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionItemEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getOccasionItemAsync(occasion_item_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionitems/{occasion_item_id}';
      request.resource = request.resource.replace(/{occasion_item_id}/g, occasion_item_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, occasion_id:any = null, claim_occasion_response_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionitems';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["occasion_id"] =  occasion_id;
      request.params["claim_occasion_response_id"] =  claim_occasion_response_id;
      return this.api.execute(request);
   }
   getOccasionItemByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionitems/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getOccasionItemByOccasionResponseAsync(occasion_response_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionitems/by_occasionresponse/{occasion_response_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createOccasionItemAsync(occasionitem:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionitems';
      request.payload = JSON.stringify(occasionitem);
      return this.api.execute(request);
   }
   updateOccasionItemAsync(occasion_item_id:string, occasionitem:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasionitems/{occasion_item_id}';
      request.resource = request.resource.replace(/{occasion_item_id}/g, occasion_item_id.toString());
      request.payload = JSON.stringify(occasionitem);
      return this.api.execute(request);
   }
   deleteOccasionItemAsync(occasion_item_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasionitems/{occasion_item_id}';
      request.resource = request.resource.replace(/{occasion_item_id}/g, occasion_item_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}